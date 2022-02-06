#include <memory>
#include "emscripten.h"
#include "imageio/webpdec.h"

int ofPow2(int v) {
  v = v * 0.8; // lower by 20% so numbers closer to low number won't get unreasonably upscaled
  // find the next power of 2
  v = (int)v - 1;
  v |= v >> 1;
  v |= v >> 2;
  v |= v >> 4;
  v |= v >> 8;
  v |= v >> 16;
  v++;
  return v;
}

extern "C"
EMSCRIPTEN_KEEPALIVE
void webpGetInfo(uint32_t* dest, const uint8_t* data, unsigned int size) {
  int width;
  int height;
  dest[0] = WebPGetInfo(data, (size_t)size, &width, &height);
  dest[1] = width;
  dest[2] = height;
}

extern "C"
EMSCRIPTEN_KEEPALIVE
void webpDecode(unsigned char* dest, const char* data, unsigned int size) {
  int width;
  int height;
  int output_size = width * 4 * height;
  uint8_t* buffer = WebPDecodeRGBA((const uint8_t*)data, (size_t)size, &width, &height);
  memcpy(dest, buffer, output_size);
  WebPFree((void*)buffer);
}

//
// From webp_wasm
//

extern "C"
EMSCRIPTEN_KEEPALIVE
int version() {
  return WebPGetDecoderVersion();
}

extern "C"
EMSCRIPTEN_KEEPALIVE
int* getInfo(const uint8_t* data, size_t size) {
  int* results = (int*) malloc(3 * sizeof(int));

  int width;
  int height;

  // (const uint8_t* data, size_t size, int* w, int* h) -> int;
  results[0] = WebPGetInfo(data, size, &width, &height);
  results[1] = width;
  results[2] = height;

  return results;
}

extern "C"
EMSCRIPTEN_KEEPALIVE
uint8_t* decode(const uint8_t* data, size_t size) {
  int width;
  int height;

  uint8_t* buffer = WebPDecodeRGBA(data, size, &width, &height);
  return buffer;
}
