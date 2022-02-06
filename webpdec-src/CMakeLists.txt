cmake_minimum_required(VERSION 3.14.0)
project(webpdec)

set(WEBP_BUILD_WEBP_JS ON)
set(EMSCRIPTEN ON)
if(WEBP_BUILD_WEBP_JS)
  set(WEBP_BUILD_ANIM_UTILS OFF)
  set(WEBP_BUILD_CWEBP OFF)
  set(WEBP_BUILD_DWEBP OFF)
  set(WEBP_BUILD_GIF2WEBP OFF)
  set(WEBP_BUILD_IMG2WEBP OFF)
  set(WEBP_BUILD_VWEBP OFF)
  set(WEBP_BUILD_WEBPINFO OFF)
  set(WEBP_BUILD_EXTRAS OFF)
  set(WEBP_USE_THREAD OFF)
endif()

foreach(LIBRARY
  "dec/alpha_dec.c"
  "dec/alphai_dec.h"
  "dec/buffer_dec.c"
  "dec/common_dec.h"
  "dec/vp8_dec.h"
  "dec/frame_dec.c"
  "dec/idec_dec.c"
  "dec/io_dec.c"
  "dec/quant_dec.c"
  "dec/tree_dec.c"
  "dec/vp8_dec.c"
  "dec/vp8i_dec.h"
  "dec/vp8l_dec.c"
  "dec/vp8li_dec.h"
  "dec/webp_dec.c"
  "dec/webpi_dec.h"

  "dsp/alpha_processing.c"
  "dsp/cpu.c"
  "dsp/dec.c"
  "dsp/dec_clip_tables.c"
  "dsp/dsp.h"
  "dsp/filters.c"
  "dsp/lossless.c"
  "dsp/lossless.h"
  "dsp/lossless_common.h"
  "dsp/rescaler.c"
  "dsp/upsampling.c"
  "dsp/yuv.c"
  "dsp/yuv.h"

  "utils/bit_reader_utils.c"
  "utils/bit_reader_utils.h"
  "utils/bit_reader_inl_utils.h"
  "utils/color_cache_utils.c"
  "utils/color_cache_utils.h"
  "utils/endian_inl_utils.h"
  "utils/filters_utils.c"
  "utils/filters_utils.h"
  "utils/huffman_utils.c"
  "utils/huffman_utils.h"
  "utils/quant_levels_dec_utils.c"
  "utils/quant_levels_dec_utils.h"
  "utils/rescaler_utils.c"
  "utils/rescaler_utils.h"
  "utils/random_utils.c"
  "utils/random_utils.h"
  "utils/thread_utils.c"
  "utils/thread_utils.h"
  "utils/utils.c"
  "utils/utils.h"

)
  list(APPEND SOURCES "${LIBRARY}")
endforeach()

add_library(webpdeclib
  STATIC
  ${SOURCES}
)

set_target_properties(webpdeclib
  PROPERTIES
  PUBLIC_HEADER "webp/decode.h;webp/encode.h;webp/types.h;dsp/dsp.h"
)

install(TARGETS webpdeclib
  LIBRARY DESTINATION "${CMAKE_INSTALL_PREFIX}/lib"
  PUBLIC_HEADER DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}"
)
