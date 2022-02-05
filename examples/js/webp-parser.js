/* eslint-disable no-restricted-globals */
importScripts('./webpParser.wasm.js')

const viewToHeap = {
  'Int8Array': 'HEAP8', 'Int16Array': 'HEAP16', 'Int32Array': 'HEAP32', 'Uint8Array': 'HEAPU8', 'Uint16Array': 'HEAPU16',
  'Uint32Array': 'HEAPU32', 'Float32Array': 'HEAPF32', 'Float64Array': 'HEAPF364',
}
function array2Heap(module, arrTyped, size) {
  var heap = module[viewToHeap[arrTyped.name]]
  var bytes = arrTyped.BYTES_PER_ELEMENT
  var offset = module._malloc(size * bytes)
  heap.set(new Uint8Array(size), offset / bytes)
  return {
    'data': heap.subarray(offset / bytes, offset / bytes + size),
    'offset': offset,
    inUse: false,
    free: () => module._free(offset)
  }
}

function parserWorker() {
  self.onmessage = function (e) {
    const { functionName } = e.data
    if (functionName && self[functionName]) {
      self[functionName](e.data, buildCallback(functionName, e.data.reqId, e.data.time))
    } else if (functionName !== 'init') {
      console.warn('functionName: ', functionName, 'not supported or not exported')
    }
  }
  self['webpGetInfo'] = webpGetInfo
  self['webpDecode'] = webpDecode
}
parserWorker()

function buildCallback(functionName, reqId, time) {
  return (data, transferrables) => self.postMessage({ functionName, reqId, time, result: data }, transferrables)
}

let parser
let loadingWorker = webpParser()

loadingWorker.then((webpParser) => {
  parser = webpParser

  cWebpGetInfo = parser.cwrap('webpGetInfo', 'number', ['number', 'number', 'number'])
  cWebpDecode = parser.cwrap('webpDecode', 'number', ['number', 'number'])
})

let heapArrays = {}
let heapArrays2 = {}

async function webpGetInfo(data, callback) {
  await loadingWorker
  const { imageBuffer } = data;

  let byteLength = imageBuffer.byteLength
  let srcArray = heapArrays[byteLength]
  if (!srcArray) {
    console.log('WebpParser: allocating new SRC heap space', byteLength)
    srcArray = heapArrays[byteLength] = array2Heap(parser, Uint8Array, byteLength)
  }
  if (srcArray.isUse) throw new Error('Array in use')
  srcArray.isUse = true
  srcArray.data.set(imageBuffer)

  let dstArray = array2Heap(parser, Uint8Array, 3)

  var time = Date.now()
  console.log('WebpParser: webpGetInfo')
  cWebpGetInfo(dstArray.offset, srcArray.offset, byteLength)
  console.log('WebpParser: webpGetInfo time', Date.now() - time)
  srcArray.isUse = false

  const result = new Uint8Array(dstArray.data)
  callback({
    data: result
  }, result.buffer)
}

async function webpDecode(data, callback) {
  await loadingWorker

  const { imageBuffer, width, height } = data;

  let byteLength = imageBuffer.byteLength
  let srcArray = heapArrays[byteLength]
  if (!srcArray) {
    console.log('WebpParser: allocating new SRC heap space', byteLength)
    srcArray = heapArrays[byteLength] = array2Heap(parser, Uint8Array, byteLength)
  }
  if (srcArray.isUse) throw new Error('Array in use')
  srcArray.isUse = true
  srcArray.data.set(imageBuffer)

  const dstSize = width * height * 4
  let dstArray = array2Heap(parser, Uint8Array, dstSize)

  var time = Date.now()
  console.log('WebpParser: webpDecode')
  cWebpDecode(dstArray.offset, srcArray.offset, byteLength)
  console.log('WebpParser: webpDecode time', Date.now() - time)
  srcArray.isUse = false

  const result = new Uint8Array(dstArray.data)
  callback({
    data: result
  }, result.buffer)
}
