// Good example for a simple service worker hijacking *.webp requests - could use when separating textures from model files

// Installation - run in main thread
// if ('serviceWorker' in navigator) {
//   void async function install() {
//     await navigator.serviceWorker.register('sw.js');
//     const registration = await navigator.serviceWorker.ready;
//     registration.active.onstatechange = (state) => {
//       for (const img of document.querySelectorAll('img')) {
//         if (img.src.endsWith('.webp')) {
//           img.src = img.src; // reload.
//         }
//       }
//     }
//   }();
// }

// Worker code
let _decoderReady = new Promise(async resolve => {
  // FIXME: Doesn't work in Chrome yet.
  // const moduleDecl = await import('webp-decoder.js');
  // const imports = await moduleDecl.importWebPDecoder();

  importScripts('webp_wasm.js');
  importScripts('classic/webp-decoder.js');
  resolve(await fetchWebPDecoder());
});

function fetchWebPDecoderWithWorkarounds() {
  return _decoderReady;
}

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', async event => {
  if (event.request.method != 'GET') return;
  if (!event.request.url.endsWith(".webp")) return;

  event.respondWith(async function() {
    try {
      const response = await fetch(event.request);
      const buffer = await response.arrayBuffer();

      const WebPDecoder = await fetchWebPDecoderWithWorkarounds();
      const decoder = new WebPDecoder(buffer);
      const blob = await decoder.decodeToBMP();

      return new Response(blob, { headers: { "content-type": "image/bmp", "status": 200 } });
    } catch(err) {
      console.error(err);
    }

    return fetch(event.request);
  }());
});
