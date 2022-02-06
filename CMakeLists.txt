cmake_minimum_required(VERSION 3.13 FATAL_ERROR)
cmake_policy(SET CMP0069 NEW)  # LTO support
set(CMAKE_POLICY_DEFAULT_CMP0077 NEW)
if (NOT ${CMAKE_SYSTEM_NAME} MATCHES "Emscripten")
  message(FATAL_ERROR "Emscripten not configured DCMAKE_TOOLCHAIN_FILE parameter not set?")
endif ()
set(CMAKE_C_COMPILER "emcc") # does this change anything? - not the same as CMAKE_TOOLCHAIN_FILE?

set(PROJECT_NAME webpParser)
project(${PROJECT_NAME})

FIND_PACKAGE(Python3)
set(PYTHON ${Python3_EXECUTABLE} CACHE STRING "Python path")
set(EMSCRIPTEN_ROOT $ENV{EMSDK}/upstream/emscripten CACHE STRING "Emscripten path")

# WTF this doesn't work - needs to run from CLI(moved to docker-compose.yml)
# set(DCMAKE_TOOLCHAIN_FILE ${EMSCRIPTEN_ROOT}/cmake/Modules/Platform/Emscripten.cmake)
set(WEBIDL_BINDER_SCRIPT ${EMSCRIPTEN_ROOT}/tools/webidl_binder.py)

set(EXTRA_JS_STUFF ${CMAKE_CURRENT_SOURCE_DIR}/js_header.js)
set(IDL_FILE ${CMAKE_CURRENT_SOURCE_DIR}/bindings.idl)
set(ONLOAD_JS_FILE ${CMAKE_CURRENT_SOURCE_DIR}/onload.js)
set(HEADER_FILE ${CMAKE_CURRENT_SOURCE_DIR}/main_header.h)
set(WEBPDEC_SOURCE_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/webpdec-src/)

# set(CMAKE_BUILD_TYPE Release CACHE STRING "Build Type") # Build Release by default
set(CMAKE_BUILD_TYPE Debug CACHE STRING "Build Type") # Build Release by default
set(CLOSURE 1 CACHE STRING "Enable closure compiler")
set(TOTAL_MEMORY 134217728 CACHE STRING "Total Memory") # Default is 67108864 = 64MB, for 128 set 134217728
set(ALLOW_MEMORY_GROWTH 0 CACHE STRING "Allow Memory Growth") # Enable for resizable heap, with some amount of slowness
set(TOTAL_STACK 5242880 CACHE STRING "Total Stack")

set(DEBUG OFF)
if(DEBUG)
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} --profiling")
endif()

# Enable SIMD
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -msse -msse2 -msse3 -msse4.1 -msimd128")
set(WEBP_ENABLE_SIMD ON)

add_subdirectory(webpdec-src EXCLUDE_FROM_ALL)
set(LIBRARY_TARGETS webpdeclib)
foreach(_TARGET ${LIBRARY_TARGETS})
  list(APPEND ALL_LIBRARIES $<TARGET_FILE:${_TARGET}>)
endforeach()

set(EMCC_ARGS
  --extern-pre-js ${EXTRA_JS_STUFF}
  -fno-rtti
  -fno-exceptions
  -ffast-math
  -flto=full
  -mnontrapping-fptoint
  --mnontrapping-fptoint
  --llvm-lto 1
  --post-js glue.js
  --post-js ${ONLOAD_JS_FILE}
  -msimd128
  # -O3
  -s ALLOW_MEMORY_GROWTH=${ALLOW_MEMORY_GROWTH}
  -s ALLOW_TABLE_GROWTH=0
  # -s BUILD_AS_WORKER=1
  -s EXPORTED_FUNCTIONS=["_malloc","_free","_webpGetInfo","_webpDecode","_version","_getInfo","_decode"]
  -s EXPORTED_RUNTIME_METHODS=["cwrap","addFunction","getValue","setValue"]
  -s EXPORT_NAME=${PROJECT_NAME}
  -s MODULARIZE=1
  -s NO_EXIT_RUNTIME=1
  -s NO_FILESYSTEM=1
  -s TOTAL_MEMORY=${TOTAL_MEMORY})

if(DEBUG)
  set(EMCC_ARGS
    ${EMCC_ARGS}
    -s ASSERTIONS=1
    -s SAFE_HEAP=1)
endif()

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
  -I${WEBPDEC_SOURCE_DIRECTORY}
  -include${HEADER_FILE})

#######################################
message("\nBuilding glue.cpp")
add_custom_command(
  OUTPUT glue.cpp glue.js
  BYPRODUCTS parser.out WebIDLGrammar.pkl
  COMMAND ${PYTHON} ${WEBIDL_BINDER_SCRIPT} ${IDL_FILE} glue
  DEPENDS ${IDL_FILE}
  COMMENT "Generating project bindings"
  VERBATIM)
message("\nBuilding glue.o")
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
#  OUTPUT webp-parser.js
#  COMMAND emcc glue.o ${ALL_LIBRARIES} ${EMCC_JS_ARGS} -o webp-parser.js
#  DEPENDS bindings ${EXTRA_JS_STUFF} ${ONLOAD_JS_FILE} ${LIBRARY_TARGETS}
#  COMMENT "Building webp-parser javascript"
#  VERBATIM)
# add_custom_target(webp-parser-javascript ALL DEPENDS webp-parser.js)

#######################################
add_custom_command(
  OUTPUT webp-parser.wasm.js webp-parser.wasm.wasm
  COMMAND emcc glue.o ${ALL_LIBRARIES} ${EMCC_WASM_ARGS} -o webp-parser.wasm.js
  DEPENDS bindings ${EXTRA_JS_STUFF} ${ONLOAD_JS_FILE} ${LIBRARY_TARGETS}
  COMMENT "Building webp-parser webassembly"
  VERBATIM)
add_custom_target(webp-parser-wasm ALL DEPENDS webp-parser.wasm.js webp-parser.wasm.wasm)

# TODO(consider) - change custom commands to cmakelists style like https://github.com/le0pard/webp-wasm
# add_executable(webp_wasm ${SOURCE_FILES})
# target_include_directories(webp_wasm PRIVATE
#     $(EMSCRIPTEN)/system/include
#     ../libwebp
# )
# set_target_properties(webp_wasm PROPERTIES LINK_FLAGS
#     "-s WASM=1 \
#     -s EXTRA_EXPORTED_RUNTIME_METHODS='[\"cwrap\", \"getValue\"]' \
#     -s ALLOW_MEMORY_GROWTH=1 \
#     -I libwebp")
