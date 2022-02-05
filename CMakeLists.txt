cmake_minimum_required(VERSION 3.14.0)
project(webpParser)

if(UNIX)
  execute_process(COMMAND mkdir -p ${CMAKE_CURRENT_BINARY_DIR}/astc)
endif()

foreach(LIBRARY
  "webp/encode.h"

  "dec/alpha_dec"
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
  # list(APPEND PUBLIC_HEADERS "${CMAKE_CURRENT_BINARY_DIR}/${LIBRARY}.h")
  list(APPEND SOURCES "${LIBRARY}")
endforeach()

include_directories(
  "${CMAKE_CURRENT_BINARY_DIR}/dec",
  "${CMAKE_CURRENT_BINARY_DIR}/demux"
)

add_library(webpParser
  STATIC
  ${SOURCES}
)

set_target_properties(webpParser
  PROPERTIES
  # PUBLIC_HEADER "${PUBLIC_HEADERS};webp/decode.h;webp/encode.h;webp/types.h;dsp/dsp.h"
  PUBLIC_HEADER "webp/decode.h;webp/encode.h;webp/types.h;dsp/dsp.h"
)

# install(TARGETS webpParser
#   LIBRARY DESTINATION "${CMAKE_INSTALL_PREFIX}/lib"
#   PUBLIC_HEADER DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}"
# )

FIND_PACKAGE(Python3)
set(PYTHON ${Python3_EXECUTABLE} CACHE STRING "Python path")
set(EMSCRIPTEN_ROOT $ENV{EMSDK}/upstream/emscripten CACHE STRING "Emscripten path")
set(CMAKE_TOOLCHAIN_FILE ${EMSCRIPTEN_ROOT}/cmake/Modules/Platform/Emscripten.cmake)
set(WEBIDL_BINDER_SCRIPT ${EMSCRIPTEN_ROOT}/tools/webidl_binder.py)
set(EXTRA_JS_STUFF ${CMAKE_CURRENT_SOURCE_DIR}/js_header.js)
set(IDL_FILE ${CMAKE_CURRENT_SOURCE_DIR}/bindings.idl)
set(ONLOAD_JS_FILE ${CMAKE_CURRENT_SOURCE_DIR}/onload.js)
set(HEADER_FILE ${CMAKE_CURRENT_SOURCE_DIR}/main_header.h)

set(CPP_SOURCE_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR})



set(LIBRARY_TARGETS webpParser)
foreach(_TARGET ${LIBRARY_TARGETS})
  list(APPEND ALL_LIBRARIES $<TARGET_FILE:${_TARGET}>)
endforeach()

# Build Release by default
set(CMAKE_BUILD_TYPE Release CACHE STRING "Build Type")

set(CLOSURE 1 CACHE STRING "Enable closure compiler")

# Default is 64*1024*1024 = 64MB
set(TOTAL_MEMORY 67108864 CACHE STRING "Total Memory")

# Enable for resizable heap, with some amount of slowness
set(ALLOW_MEMORY_GROWTH 0 CACHE STRING "Allow Memory Growth")

set(EMCC_ARGS
  --extern-pre-js ${EXTRA_JS_STUFF}
  -fno-rtti
  # -fno-exceptions
  -ffast-math
  -flto=full
  -mnontrapping-fptoint
  --mnontrapping-fptoint
  --llvm-lto 1
  --post-js glue.js
  --post-js ${ONLOAD_JS_FILE}
  -msimd128
  -O3
  -s ALLOW_MEMORY_GROWTH=${ALLOW_MEMORY_GROWTH}
  -s ALLOW_TABLE_GROWTH=0
  # -s BUILD_AS_WORKER=1
  -s EXPORTED_FUNCTIONS=["_malloc","_webpGetInfo","_webpDecode"]
  -s EXPORTED_RUNTIME_METHODS=["cwrap","addFunction"]
  -s EXPORT_NAME=${PROJECT_NAME}
  -s MODULARIZE=1
  -s NO_EXIT_RUNTIME=1
  -s NO_FILESYSTEM=1
  -s TOTAL_MEMORY=${TOTAL_MEMORY})

if(${CLOSURE})
  # Ignore closure errors about the bullet Node class
  # (Node is a DOM thing too)
  LIST(APPEND EMCC_ARGS
    --closure 1
    -s IGNORE_CLOSURE_COMPILER_ERRORS=1)
else()
  LIST(APPEND EMCC_ARGS
    -s NO_DYNAMIC_EXECUTION=1)
endif()

set(EMCC_JS_ARGS ${EMCC_ARGS}
  -s AGGRESSIVE_VARIABLE_ELIMINATION=1
  -s ELIMINATE_DUPLICATE_FUNCTIONS=1
  -s LEGACY_VM_SUPPORT=1
  -s SINGLE_FILE=1
  -s WASM=0)

set(EMCC_WASM_ARGS ${EMCC_ARGS}
  -s BINARYEN_IGNORE_IMPLICIT_TRAPS=1
  -s WASM=1)

set(EMCC_GLUE_ARGS
  -c
  -msimd128
  -I${CPP_SOURCE_DIRECTORY}
  -include${HEADER_FILE})


#######################################
project(${PROJECT_NAME})

#######################################
add_custom_command(
  OUTPUT glue.cpp glue.js
  BYPRODUCTS parser.out WebIDLGrammar.pkl
  COMMAND ${PYTHON} ${WEBIDL_BINDER_SCRIPT} ${IDL_FILE} glue
  DEPENDS ${IDL_FILE}
  COMMENT "Generating project bindings"
  VERBATIM)
add_custom_command(
  OUTPUT glue.o
  COMMAND emcc glue.cpp ${EMCC_GLUE_ARGS} -o glue.o
  DEPENDS glue.cpp ${HEADER_FILE}
  COMMENT "Building project bindings"
  VERBATIM)
add_custom_target(bindings ALL DEPENDS glue.js glue.o)


# Do not build JS version
#######################################
# add_custom_command(
#  OUTPUT elproject.js
#  COMMAND emcc glue.o ${ALL_LIBRARIES} ${EMCC_JS_ARGS} -o elproject.js
#  DEPENDS bindings ${EXTRA_JS_STUFF} ${ONLOAD_JS_FILE} ${LIBRARY_TARGETS}
#  COMMENT "Building elproject javascript"
#  VERBATIM)
# add_custom_target(elproject-javascript ALL DEPENDS elproject.js)


#######################################
add_custom_command(
  OUTPUT elproject.wasm.js elproject.wasm.wasm
  COMMAND emcc glue.o ${ALL_LIBRARIES} ${EMCC_WASM_ARGS} -o elproject.wasm.js
  DEPENDS bindings ${EXTRA_JS_STUFF} ${ONLOAD_JS_FILE} ${LIBRARY_TARGETS}
  COMMENT "Building elproject webassembly"
  VERBATIM)
add_custom_target(elproject-wasm ALL DEPENDS elproject.wasm.js elproject.wasm.wasm)
