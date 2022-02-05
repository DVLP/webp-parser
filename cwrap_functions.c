#include <memory>
#include "emscripten.h"

extern "C"
EMSCRIPTEN_KEEPALIVE
void webpGetInfo(unsigned char* dest, const char* data, unsigned int size) {
  // int* results = (int*) malloc(3 * sizeof(int));

  int width;
  int height;

  // (const uint8_t* data, size_t size, int* w, int* h) -> int;
  dest[0] = WebPGetInfo((const uint8_t*)data, (size_t)size, &width, &height);
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
