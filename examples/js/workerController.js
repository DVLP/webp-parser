/*
  This is a function that magically enables to call worker's functions directly from the main thread and get results in a callback
  No need to extend this function just use the 2 steps below:

  // --- Main thread code
  // 1. Create a worker
  const newWorker = createWorker(urlToWorker, ['exampleFunction']);

  // 2. Call functions from inside of the worker directly (remember to export for closure compiler!)
  worker.exampleFunction({
    items: []
  }, function callback(results) {
    console.log('work results: ', results)
  });

  // --- End of main thread code

  // --- Worker code

  function initWorker() {
    self.onmessage = function (e) {
      const { functionName } = e.data
      if (functionName && self[functionName]) {
        self[functionName](e.data, buildCallback(functionName, e.data.reqId, e.data.time))
      } else if (functionName !== 'init') {
        console.warn('functionName: ', functionName, 'not supported or not exported')
      }
    }
  }
  initWorker()

  function buildCallback(functionName, reqId, time) {
    return function (data, transferrables) {
      const message = {
        functionName, reqId, time, result: data,
      }
      self.postMessage(message, transferrables)
    }
  }

  self['exampleFunction'] = exampleFunction; // export function name for minifiers

  function exampleFunction(arguments, callback) {
    // processing in a worker
    callback({})
  }
  // --- End of worker code

*/

function createWorker (workerPath, functions) {
  return new WorkerController(workerPath, functions)
}

const CB_QUEUE_SIZE = 100
const INVALID_REQUEST_ID = -1

// use createWorker(workerPath, ['functionName'])
class WorkerController {
  constructor(workerPath, functions) {
    this.worker = new Worker(workerPath)
    const callbacks = []
    let reqId = 0

    this.worker.addEventListener('message', (e) => {
      const index = e.data.reqId % CB_QUEUE_SIZE
      if (callbacks[index][0] > e.data.reqId) {
        return
      }
      callbacks[index][1](e.data.result)
      callbacks[index][0] = INVALID_REQUEST_ID
    })

    // create functions from "functions" array
    if (functions !== undefined) {
      for (let i = 0; i < CB_QUEUE_SIZE; i++) {
        callbacks[i] = [INVALID_REQUEST_ID, null]
      }

      for (let i = 0; i < functions.length; i++) {
        const functionName = functions[i]
        // eslint-disable-next-line no-loop-func
        this[functionName] = (function (fnName) {
          return function (args, callback, bufferArgs) {
            args.reqId = reqId
            args.functionName = fnName
            // if(callbacks[reqId]) {
            //   throw new Error('Overwriting a callback. Bad things will happen');
            // }
            const callbackIndex = reqId % CB_QUEUE_SIZE
            callbacks[callbackIndex][0] = reqId
            callbacks[callbackIndex][1] = callback
            reqId++
            this.worker.postMessage(args, bufferArgs)
          }
        }(functionName))
      }
    }

    Object.seal(this)
  }
}

// Future proxy version
// reqId = 0;
// createWorker = function (workerPath) {
//   const worker = new Worker(workerPath);
//   const proxy = new Proxy(worker, {
//     get: function (scope, functionName) {
//       if(!worker[functionName]) {
//         return function (args, callback) {
//           args.functionName = functionName;
//           worker.messageWorker(args, callback);
//         };
//       } else {
//         return worker[functionName];
//       }
//     }
//   });
//   return proxy;
// }

// // do not call directly! use createWorker(workerPath)
// Worker = function (workerPath) {
//   this.worker = new Worker(workerPath);
//   return this;
// };
// Worker.prototype.messageWorker = function (message, callback) {
//   const worker = this.worker;

//   message.reqId = reqId++;

//   function listen(e){
//     if (e.data.reqId === message.reqId){
//       worker.removeEventListener('message', listen);
//       callback(e.data.result);
//     }
//   }

//   worker.addEventListener('message', listen);
//   worker.postMessage(message);
// };