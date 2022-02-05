#include <assert.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#ifdef HAVE_CONFIG_H
#include "webp/config.h"
#endif

#include "imageio/webpdec.h"
// #include "./unicode.h"

static int verbose = 0;
static int quiet = 0;
#ifndef WEBP_DLL
#ifdef __cplusplus
extern "C" {
#endif

extern void* VP8GetCPUInfo;   // opaque forward declaration.

#ifdef __cplusplus
}    // extern "C"
#endif
#endif  // WEBP_DLL

static const char* const kFormatType[] = {
  "unspecified", "lossy", "lossless"
};

// WebPDecBuffer WebpToRGBA
int WebpToRGBA(const uint8_t* data, size_t data_size, uint8_t* dest, int width, int height) {
  WebPDecoderConfig config;
  if (!WebPInitDecoderConfig(&config)) {
    fprintf(stderr, "Library version mismatch!\n");
  }

  config.options.no_fancy_upsampling = 1;
  config.options.bypass_filtering = 1;

  config.options.use_scaling = 1;
  config.options.scaled_width  = width;
  config.options.scaled_height = height;
  // config.options.flip = 1;

  VP8StatusCode status = VP8_STATUS_OK;

  // status = WebPGetFeatures(data, data_size, bitstream);
  // if (status != VP8_STATUS_OK) {
  //   // WebPFree((void*)*data);
  //   data_size = 0;
  //   return 0;
  // }

  #if SDL_BYTEORDER == SDL_BIG_ENDIAN
    config.output.colorspace = MODE_BGRA;
  #else
    config.output.colorspace = MODE_RGBA;
  #endif
  
  config.output.u.RGBA.rgba = dest;
  int stride = width * 4;
  config.output.u.RGBA.stride = stride;
  config.output.u.RGBA.size = stride * height;
  config.output.is_external_memory = 1;

  status = WebPDecode(data, data_size, &config);
  WebPFree((void*)data);
  if (status != VP8_STATUS_OK) {
    printf("Error during decoding");
    return 0;
  }

  if (!quiet) {
    // WFPRINTF(stderr, "Decoded data.");
    fprintf(stderr, " Dimensions: %d x %d %s. Format: %s. Now saving...\n");
            // bitstream->has_alpha ? " (with alpha)" : "",
            // kFormatType[bitstream->format]);
  }
  return 1;
  // WebPFreeDecBuffer(output_buffer);
}

//------------------------------------------------------------------------------
