// Define defines here if needed
// #define USE_SIMD
// #define __SSE__

// Optional simdee stuff
// #include <wasm_simd128.h>
// #include <xmmintrin.h> // is this needed? or should already be in cpp sources?

#include "common.h"

// Non-idl cwrap functions for shared memory between JS and WASM
#include "./cwrap_functions.c"
