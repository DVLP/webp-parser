
var webpParser = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(webpParser) {
  webpParser = webpParser || {};


var a;
a || (a = typeof webpParser !== 'undefined' ? webpParser : {});
var aa = Object.assign, ba, b;
a.ready = new Promise(function(c, d) {
  ba = c;
  b = d;
});
Object.getOwnPropertyDescriptor(a.ready, "_malloc") || (Object.defineProperty(a.ready, "_malloc", {configurable:!0, get:function() {
  n("You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_malloc", {configurable:!0, set:function() {
  n("You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_free") || (Object.defineProperty(a.ready, "_free", {configurable:!0, get:function() {
  n("You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_free", {configurable:!0, set:function() {
  n("You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_webpGetInfo") || (Object.defineProperty(a.ready, "_webpGetInfo", {configurable:!0, get:function() {
  n("You are getting _webpGetInfo on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_webpGetInfo", {configurable:!0, set:function() {
  n("You are setting _webpGetInfo on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_webpDecode") || (Object.defineProperty(a.ready, "_webpDecode", {configurable:!0, get:function() {
  n("You are getting _webpDecode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_webpDecode", {configurable:!0, set:function() {
  n("You are setting _webpDecode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_version") || (Object.defineProperty(a.ready, "_version", {configurable:!0, get:function() {
  n("You are getting _version on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_version", {configurable:!0, set:function() {
  n("You are setting _version on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_getInfo") || (Object.defineProperty(a.ready, "_getInfo", {configurable:!0, get:function() {
  n("You are getting _getInfo on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_getInfo", {configurable:!0, set:function() {
  n("You are setting _getInfo on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_decode") || (Object.defineProperty(a.ready, "_decode", {configurable:!0, get:function() {
  n("You are getting _decode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_decode", {configurable:!0, set:function() {
  n("You are setting _decode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_emscripten_bind_VoidPtr___destroy___0") || (Object.defineProperty(a.ready, "_emscripten_bind_VoidPtr___destroy___0", {configurable:!0, get:function() {
  n("You are getting _emscripten_bind_VoidPtr___destroy___0 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_emscripten_bind_VoidPtr___destroy___0", {configurable:!0, set:function() {
  n("You are setting _emscripten_bind_VoidPtr___destroy___0 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_emscripten_enum_placeholderToBuild_DO_THING") || (Object.defineProperty(a.ready, "_emscripten_enum_placeholderToBuild_DO_THING", {configurable:!0, get:function() {
  n("You are getting _emscripten_enum_placeholderToBuild_DO_THING on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_emscripten_enum_placeholderToBuild_DO_THING", {configurable:!0, set:function() {
  n("You are setting _emscripten_enum_placeholderToBuild_DO_THING on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_emscripten_enum_placeholderToBuild_DO_NOTHING") || (Object.defineProperty(a.ready, "_emscripten_enum_placeholderToBuild_DO_NOTHING", {configurable:!0, get:function() {
  n("You are getting _emscripten_enum_placeholderToBuild_DO_NOTHING on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_emscripten_enum_placeholderToBuild_DO_NOTHING", {configurable:!0, set:function() {
  n("You are setting _emscripten_enum_placeholderToBuild_DO_NOTHING on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "onRuntimeInitialized") || (Object.defineProperty(a.ready, "onRuntimeInitialized", {configurable:!0, get:function() {
  n("You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "onRuntimeInitialized", {configurable:!0, set:function() {
  n("You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
var ca = aa({}, a), p = "object" === typeof window, t = "function" === typeof importScripts, da = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node, ea = !p && !da && !t;
if (a.ENVIRONMENT) {
  throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
}
var u = "", v, w, y, fs, A, fa;
if (da) {
  if ("object" !== typeof process || "function" !== typeof require) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
  u = t ? require("path").dirname(u) + "/" : __dirname + "/";
  fa = () => {
    A || (fs = require("fs"), A = require("path"));
  };
  v = function(c, d) {
    fa();
    c = A.normalize(c);
    return fs.readFileSync(c, d ? null : "utf8");
  };
  y = c => {
    c = v(c, !0);
    c.buffer || (c = new Uint8Array(c));
    assert(c.buffer);
    return c;
  };
  w = (c, d, f) => {
    fa();
    c = A.normalize(c);
    fs.readFile(c, function(e, g) {
      e ? f(e) : d(g.buffer);
    });
  };
  1 < process.argv.length && process.argv[1].replace(/\\/g, "/");
  process.argv.slice(2);
  process.on("uncaughtException", function(c) {
    throw c;
  });
  process.on("unhandledRejection", function(c) {
    throw c;
  });
  a.inspect = function() {
    return "[Emscripten Module object]";
  };
} else if (ea) {
  if ("object" === typeof process && "function" === typeof require || "object" === typeof window || "function" === typeof importScripts) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
  "undefined" != typeof read && (v = function(c) {
    return read(c);
  });
  y = function(c) {
    if ("function" === typeof readbuffer) {
      return new Uint8Array(readbuffer(c));
    }
    c = read(c, "binary");
    assert("object" === typeof c);
    return c;
  };
  w = function(c, d) {
    setTimeout(() => d(y(c)), 0);
  };
  "undefined" !== typeof print && ("undefined" === typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" !== typeof printErr ? printErr : print);
} else if (p || t) {
  t ? u = self.location.href : "undefined" !== typeof document && document.currentScript && (u = document.currentScript.src);
  _scriptDir && (u = _scriptDir);
  u = 0 !== u.indexOf("blob:") ? u.substr(0, u.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
  if ("object" !== typeof window && "function" !== typeof importScripts) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
  v = c => {
    var d = new XMLHttpRequest();
    d.open("GET", c, !1);
    d.send(null);
    return d.responseText;
  };
  t && (y = c => {
    var d = new XMLHttpRequest();
    d.open("GET", c, !1);
    d.responseType = "arraybuffer";
    d.send(null);
    return new Uint8Array(d.response);
  });
  w = (c, d, f) => {
    var e = new XMLHttpRequest();
    e.open("GET", c, !0);
    e.responseType = "arraybuffer";
    e.onload = () => {
      200 == e.status || 0 == e.status && e.response ? d(e.response) : f();
    };
    e.onerror = f;
    e.send(null);
  };
} else {
  throw Error("environment detection error");
}
a.print || console.log.bind(console);
var B = a.printErr || console.warn.bind(console);
aa(a, ca);
ca = null;
Object.getOwnPropertyDescriptor(a, "arguments") || Object.defineProperty(a, "arguments", {configurable:!0, get:function() {
  n("Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(a, "thisProgram") || Object.defineProperty(a, "thisProgram", {configurable:!0, get:function() {
  n("Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(a, "quit") || Object.defineProperty(a, "quit", {configurable:!0, get:function() {
  n("Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
assert("undefined" === typeof a.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof a.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof a.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof a.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof a.read, "Module.read option was removed (modify read_ in JS)");
assert("undefined" === typeof a.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
assert("undefined" === typeof a.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
assert("undefined" === typeof a.setWindowTitle, "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
assert("undefined" === typeof a.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
Object.getOwnPropertyDescriptor(a, "read") || Object.defineProperty(a, "read", {configurable:!0, get:function() {
  n("Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(a, "readAsync") || Object.defineProperty(a, "readAsync", {configurable:!0, get:function() {
  n("Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(a, "readBinary") || Object.defineProperty(a, "readBinary", {configurable:!0, get:function() {
  n("Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(a, "setWindowTitle") || Object.defineProperty(a, "setWindowTitle", {configurable:!0, get:function() {
  n("Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
assert(!ea, "shell environment detected but not enabled at build time.  Add 'shell' to `-s ENVIRONMENT` to enable.");
function ha(c) {
  C || (C = {});
  C[c] || (C[c] = 1, B(c));
}
var C, ia = [], D, E;
a.wasmBinary && (E = a.wasmBinary);
Object.getOwnPropertyDescriptor(a, "wasmBinary") || Object.defineProperty(a, "wasmBinary", {configurable:!0, get:function() {
  n("Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
var noExitRuntime = a.noExitRuntime || !0;
Object.getOwnPropertyDescriptor(a, "noExitRuntime") || Object.defineProperty(a, "noExitRuntime", {configurable:!0, get:function() {
  n("Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
"object" !== typeof WebAssembly && n("no native wasm support detected");
var ja, F = !1;
function assert(c, d) {
  c || n("Assertion failed" + (d ? ": " + d : ""));
}
function ka(c) {
  var d = a["_" + c];
  assert(d, "Cannot call unknown function " + c + ", make sure it is exported");
  return d;
}
function la(c, d, f, e) {
  var g = {string:function(m) {
    var L = 0;
    if (null !== m && void 0 !== m && 0 !== m) {
      var x = (m.length << 2) + 1, q = L = ma(x);
      assert("number" == typeof x, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      var z = G;
      if (0 < x) {
        x = q + x - 1;
        for (var T = 0; T < m.length; ++T) {
          var l = m.charCodeAt(T);
          if (55296 <= l && 57343 >= l) {
            var Na = m.charCodeAt(++T);
            l = 65536 + ((l & 1023) << 10) | Na & 1023;
          }
          if (127 >= l) {
            if (q >= x) {
              break;
            }
            z[q++] = l;
          } else {
            if (2047 >= l) {
              if (q + 1 >= x) {
                break;
              }
              z[q++] = 192 | l >> 6;
            } else {
              if (65535 >= l) {
                if (q + 2 >= x) {
                  break;
                }
                z[q++] = 224 | l >> 12;
              } else {
                if (q + 3 >= x) {
                  break;
                }
                1114111 < l && ha("Invalid Unicode code point 0x" + l.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
                z[q++] = 240 | l >> 18;
                z[q++] = 128 | l >> 12 & 63;
              }
              z[q++] = 128 | l >> 6 & 63;
            }
            z[q++] = 128 | l & 63;
          }
        }
        z[q] = 0;
      }
    }
    return L;
  }, array:function(m) {
    var L = ma(m.length);
    assert(0 <= m.length, "writeArrayToMemory array must have a length (should be an array or typed array)");
    H.set(m, L);
    return L;
  }};
  c = ka(c);
  var h = [], k = 0;
  assert("array" !== d, 'Return type should not be "array".');
  if (e) {
    for (var r = 0; r < e.length; r++) {
      var ya = g[f[r]];
      ya ? (0 === k && (k = na()), h[r] = ya(e[r])) : h[r] = e[r];
    }
  }
  f = c.apply(null, h);
  return f = function(m) {
    0 !== k && oa(k);
    return "string" === d ? I(m) : "boolean" === d ? !!m : m;
  }(f);
}
var pa = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function I(c) {
  if (c) {
    for (var d = G, f = c + void 0, e = c; d[e] && !(e >= f);) {
      ++e;
    }
    if (16 < e - c && d.subarray && pa) {
      c = pa.decode(d.subarray(c, e));
    } else {
      for (f = ""; c < e;) {
        var g = d[c++];
        if (g & 128) {
          var h = d[c++] & 63;
          if (192 == (g & 224)) {
            f += String.fromCharCode((g & 31) << 6 | h);
          } else {
            var k = d[c++] & 63;
            224 == (g & 240) ? g = (g & 15) << 12 | h << 6 | k : (240 != (g & 248) && ha("Invalid UTF-8 leading byte 0x" + g.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), g = (g & 7) << 18 | h << 12 | k << 6 | d[c++] & 63);
            65536 > g ? f += String.fromCharCode(g) : (g -= 65536, f += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023));
          }
        } else {
          f += String.fromCharCode(g);
        }
      }
      c = f;
    }
  } else {
    c = "";
  }
  return c;
}
"undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");
var H, G, qa, J, ra, sa, ta;
a.TOTAL_STACK && assert(5242880 === a.TOTAL_STACK, "the stack size can no longer be determined at runtime");
var ua = a.INITIAL_MEMORY || 134217728;
Object.getOwnPropertyDescriptor(a, "INITIAL_MEMORY") || Object.defineProperty(a, "INITIAL_MEMORY", {configurable:!0, get:function() {
  n("Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
assert(5242880 <= ua, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + ua + "! (TOTAL_STACK=5242880)");
assert("undefined" !== typeof Int32Array && "undefined" !== typeof Float64Array && void 0 !== Int32Array.prototype.subarray && void 0 !== Int32Array.prototype.set, "JS engine does not provide full typed array support");
assert(!a.wasmMemory, "Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally");
assert(134217728 == ua, "Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically");
var K;
function va() {
  var c = wa();
  assert(0 == (c & 3));
  J[c + 4 >> 2] = 34821223;
  J[c + 8 >> 2] = 2310721022;
  J[0] = 1668509029;
}
function M() {
  if (!F) {
    var c = wa(), d = ra[c + 4 >> 2];
    c = ra[c + 8 >> 2];
    34821223 == d && 2310721022 == c || n("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + c.toString(16) + " 0x" + d.toString(16));
    1668509029 !== J[0] && n("Runtime error: The application has corrupted its heap memory area (address zero)!");
  }
}
var xa = new Int16Array(1), za = new Int8Array(xa.buffer);
xa[0] = 25459;
if (115 !== za[0] || 99 !== za[1]) {
  throw "Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)";
}
var Aa = [], Ba = [], Ca = [], N = !1;
function Da() {
  var c = a.preRun.shift();
  Aa.unshift(c);
}
assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var O = 0, P = null, Q = null, R = {};
function Ea() {
  O++;
  a.monitorRunDependencies && a.monitorRunDependencies(O);
  assert(!R["wasm-instantiate"]);
  R["wasm-instantiate"] = 1;
  null === P && "undefined" !== typeof setInterval && (P = setInterval(function() {
    if (F) {
      clearInterval(P), P = null;
    } else {
      var c = !1, d;
      for (d in R) {
        c || (c = !0, B("still waiting on run dependencies:")), B("dependency: " + d);
      }
      c && B("(end of list)");
    }
  }, 10000));
}
a.preloadedImages = {};
a.preloadedAudios = {};
function n(c) {
  if (a.onAbort) {
    a.onAbort(c);
  }
  c = "Aborted(" + c + ")";
  B(c);
  F = !0;
  c = new WebAssembly.RuntimeError(c);
  b(c);
  throw c;
}
function Fa() {
  n("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1");
}
a.FS_createDataFile = function() {
  Fa();
};
a.FS_createPreloadedFile = function() {
  Fa();
};
function Ga() {
  return S.startsWith("data:application/octet-stream;base64,");
}
function U(c) {
  return function() {
    var d = a.asm;
    assert(N, "native function `" + c + "` called before runtime initialization");
    assert(!0, "native function `" + c + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    d[c] || assert(d[c], "exported native function `" + c + "` not found");
    return d[c].apply(null, arguments);
  };
}
var S;
S = "webp-parser.wasm.wasm";
if (!Ga()) {
  var Ha = S;
  S = a.locateFile ? a.locateFile(Ha, u) : u + Ha;
}
function Ia() {
  var c = S;
  try {
    if (c == S && E) {
      return new Uint8Array(E);
    }
    if (y) {
      return y(c);
    }
    throw "both async and sync fetching of the wasm failed";
  } catch (d) {
    n(d);
  }
}
function Ja() {
  if (!E && (p || t)) {
    if ("function" === typeof fetch && !S.startsWith("file://")) {
      return fetch(S, {credentials:"same-origin"}).then(function(c) {
        if (!c.ok) {
          throw "failed to load wasm binary file at '" + S + "'";
        }
        return c.arrayBuffer();
      }).catch(function() {
        return Ia();
      });
    }
    if (w) {
      return new Promise(function(c, d) {
        w(S, function(f) {
          c(new Uint8Array(f));
        }, d);
      });
    }
  }
  return Promise.resolve().then(function() {
    return Ia();
  });
}
var V, Ka;
function La(c) {
  for (; 0 < c.length;) {
    var d = c.shift();
    if ("function" == typeof d) {
      d(a);
    } else {
      var f = d.o;
      "number" === typeof f ? void 0 === d.l ? Ma(f)() : Ma(f)(d.l) : f(void 0 === d.l ? null : d.l);
    }
  }
}
var W = [];
function Ma(c) {
  var d = W[c];
  d || (c >= W.length && (W.length = c + 1), W[c] = d = K.get(c));
  assert(K.get(c) == d, "JavaScript-side Wasm function table mirror is out of date!");
  return d;
}
var Oa = {__assert_fail:function(c, d, f, e) {
  n("Assertion failed: " + I(c) + ", at: " + [d ? I(d) : "unknown filename", f, e ? I(e) : "unknown function"]);
}, array_bounds_check_error:function(c, d) {
  throw "Array index " + c + " out of bounds: [0," + d + ")";
}, emscripten_memcpy_big:function(c, d, f) {
  G.copyWithin(c, d, d + f);
}, emscripten_resize_heap:function(c) {
  n("Cannot enlarge memory arrays to size " + (c >>> 0) + " bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value " + H.length + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
}};
(function() {
  function c(h) {
    a.asm = h.exports;
    ja = a.asm.memory;
    assert(ja, "memory not found in wasm exports");
    h = ja.buffer;
    a.HEAP8 = H = new Int8Array(h);
    a.HEAP16 = qa = new Int16Array(h);
    a.HEAP32 = J = new Int32Array(h);
    a.HEAPU8 = G = new Uint8Array(h);
    a.HEAPU16 = new Uint16Array(h);
    a.HEAPU32 = ra = new Uint32Array(h);
    a.HEAPF32 = sa = new Float32Array(h);
    a.HEAPF64 = ta = new Float64Array(h);
    K = a.asm.__indirect_function_table;
    assert(K, "table not found in wasm exports");
    Ba.unshift(a.asm.__wasm_call_ctors);
    O--;
    a.monitorRunDependencies && a.monitorRunDependencies(O);
    assert(R["wasm-instantiate"]);
    delete R["wasm-instantiate"];
    0 == O && (null !== P && (clearInterval(P), P = null), Q && (h = Q, Q = null, h()));
  }
  function d(h) {
    assert(a === g, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    g = null;
    c(h.instance);
  }
  function f(h) {
    return Ja().then(function(k) {
      return WebAssembly.instantiate(k, e);
    }).then(function(k) {
      return k;
    }).then(h, function(k) {
      B("failed to asynchronously prepare wasm: " + k);
      S.startsWith("file://") && B("warning: Loading from a file URI (" + S + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing");
      n(k);
    });
  }
  var e = {env:Oa, wasi_snapshot_preview1:Oa,};
  Ea();
  var g = a;
  if (a.instantiateWasm) {
    try {
      return a.instantiateWasm(e, c);
    } catch (h) {
      return B("Module.instantiateWasm callback failed with error: " + h), !1;
    }
  }
  (function() {
    return E || "function" !== typeof WebAssembly.instantiateStreaming || Ga() || S.startsWith("file://") || "function" !== typeof fetch ? f(d) : fetch(S, {credentials:"same-origin"}).then(function(h) {
      return WebAssembly.instantiateStreaming(h, e).then(d, function(k) {
        B("wasm streaming compile failed: " + k);
        B("falling back to ArrayBuffer instantiation");
        return f(d);
      });
    });
  })().catch(b);
  return {};
})();
a.___wasm_call_ctors = U("__wasm_call_ctors");
a._webpGetInfo = U("webpGetInfo");
a._webpDecode = U("webpDecode");
a._version = U("version");
a._getInfo = U("getInfo");
a._malloc = U("malloc");
a._decode = U("decode");
var Pa = a._emscripten_bind_VoidPtr___destroy___0 = U("emscripten_bind_VoidPtr___destroy___0"), Qa = a._emscripten_enum_placeholderToBuild_DO_THING = U("emscripten_enum_placeholderToBuild_DO_THING"), Ra = a._emscripten_enum_placeholderToBuild_DO_NOTHING = U("emscripten_enum_placeholderToBuild_DO_NOTHING");
a._free = U("free");
a.___errno_location = U("__errno_location");
var Sa = a._emscripten_stack_init = function() {
  return (Sa = a._emscripten_stack_init = a.asm.emscripten_stack_init).apply(null, arguments);
};
a._emscripten_stack_get_free = function() {
  return (a._emscripten_stack_get_free = a.asm.emscripten_stack_get_free).apply(null, arguments);
};
var wa = a._emscripten_stack_get_end = function() {
  return (wa = a._emscripten_stack_get_end = a.asm.emscripten_stack_get_end).apply(null, arguments);
}, na = a.stackSave = U("stackSave"), oa = a.stackRestore = U("stackRestore"), ma = a.stackAlloc = U("stackAlloc");
Object.getOwnPropertyDescriptor(a, "intArrayFromString") || (a.intArrayFromString = () => n("'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "intArrayToString") || (a.intArrayToString = () => n("'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "ccall") || (a.ccall = () => n("'ccall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
a.cwrap = function(c, d, f) {
  return function() {
    return la(c, d, f, arguments);
  };
};
a.setValue = function(c, d, f = "i8") {
  "*" === f.charAt(f.length - 1) && (f = "i32");
  switch(f) {
    case "i1":
      H[c >> 0] = d;
      break;
    case "i8":
      H[c >> 0] = d;
      break;
    case "i16":
      qa[c >> 1] = d;
      break;
    case "i32":
      J[c >> 2] = d;
      break;
    case "i64":
      Ka = [d >>> 0, (V = d, 1.0 <= +Math.abs(V) ? 0.0 < V ? (Math.min(+Math.floor(V / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+Math.ceil((V - +(~~V >>> 0)) / 4294967296.0) >>> 0 : 0)];
      J[c >> 2] = Ka[0];
      J[c + 4 >> 2] = Ka[1];
      break;
    case "float":
      sa[c >> 2] = d;
      break;
    case "double":
      ta[c >> 3] = d;
      break;
    default:
      n("invalid type for setValue: " + f);
  }
};
a.getValue = function(c, d = "i8") {
  "*" === d.charAt(d.length - 1) && (d = "i32");
  switch(d) {
    case "i1":
      return H[c >> 0];
    case "i8":
      return H[c >> 0];
    case "i16":
      return qa[c >> 1];
    case "i32":
      return J[c >> 2];
    case "i64":
      return J[c >> 2];
    case "float":
      return sa[c >> 2];
    case "double":
      return Number(ta[c >> 3]);
    default:
      n("invalid type for getValue: " + d);
  }
  return null;
};
Object.getOwnPropertyDescriptor(a, "allocate") || (a.allocate = () => n("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "UTF8ArrayToString") || (a.UTF8ArrayToString = () => n("'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "UTF8ToString") || (a.UTF8ToString = () => n("'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "stringToUTF8Array") || (a.stringToUTF8Array = () => n("'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "stringToUTF8") || (a.stringToUTF8 = () => n("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "lengthBytesUTF8") || (a.lengthBytesUTF8 = () => n("'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "stackTrace") || (a.stackTrace = () => n("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "addOnPreRun") || (a.addOnPreRun = () => n("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "addOnInit") || (a.addOnInit = () => n("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "addOnPreMain") || (a.addOnPreMain = () => n("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "addOnExit") || (a.addOnExit = () => n("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "addOnPostRun") || (a.addOnPostRun = () => n("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "writeStringToMemory") || (a.writeStringToMemory = () => n("'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "writeArrayToMemory") || (a.writeArrayToMemory = () => n("'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "writeAsciiToMemory") || (a.writeAsciiToMemory = () => n("'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "addRunDependency") || (a.addRunDependency = () => n("'addRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"));
Object.getOwnPropertyDescriptor(a, "removeRunDependency") || (a.removeRunDependency = () => n("'removeRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"));
Object.getOwnPropertyDescriptor(a, "FS_createFolder") || (a.FS_createFolder = () => n("'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "FS_createPath") || (a.FS_createPath = () => n("'FS_createPath' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"));
Object.getOwnPropertyDescriptor(a, "FS_createDataFile") || (a.FS_createDataFile = () => n("'FS_createDataFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"));
Object.getOwnPropertyDescriptor(a, "FS_createPreloadedFile") || (a.FS_createPreloadedFile = () => n("'FS_createPreloadedFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"));
Object.getOwnPropertyDescriptor(a, "FS_createLazyFile") || (a.FS_createLazyFile = () => n("'FS_createLazyFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"));
Object.getOwnPropertyDescriptor(a, "FS_createLink") || (a.FS_createLink = () => n("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "FS_createDevice") || (a.FS_createDevice = () => n("'FS_createDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"));
Object.getOwnPropertyDescriptor(a, "FS_unlink") || (a.FS_unlink = () => n("'FS_unlink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"));
Object.getOwnPropertyDescriptor(a, "getLEB") || (a.getLEB = () => n("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getFunctionTables") || (a.getFunctionTables = () => n("'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "alignFunctionTables") || (a.alignFunctionTables = () => n("'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerFunctions") || (a.registerFunctions = () => n("'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
a.addFunction = function(c, d) {
  assert("undefined" !== typeof c);
  if (!D) {
    D = new WeakMap();
    for (var f = K.length, e = 0; e < 0 + f; e++) {
      var g = Ma(e);
      g && D.set(g, e);
    }
  }
  if (D.has(c)) {
    return D.get(c);
  }
  if (ia.length) {
    f = ia.pop();
  } else {
    try {
      K.grow(1);
    } catch (r) {
      if (!(r instanceof RangeError)) {
        throw r;
      }
      throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
    }
    f = K.length - 1;
  }
  try {
    e = f, K.set(e, c), W[e] = c;
  } catch (r) {
    if (!(r instanceof TypeError)) {
      throw r;
    }
    assert("undefined" !== typeof d, "Missing signature argument to addFunction: " + c);
    if ("function" === typeof WebAssembly.Function) {
      g = {i:"i32", j:"i64", f:"f32", d:"f64"};
      var h = {parameters:[], results:"v" == d[0] ? [] : [g[d[0]]]};
      for (e = 1; e < d.length; ++e) {
        h.parameters.push(g[d[e]]);
      }
      e = new WebAssembly.Function(h, c);
    } else {
      g = [1, 0, 1, 96,];
      h = d.slice(0, 1);
      d = d.slice(1);
      var k = {i:127, j:126, f:125, d:124,};
      g.push(d.length);
      for (e = 0; e < d.length; ++e) {
        g.push(k[d[e]]);
      }
      "v" == h ? g.push(0) : g = g.concat([1, k[h]]);
      g[1] = g.length - 2;
      d = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0,].concat(g, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0,]));
      d = new WebAssembly.Module(d);
      e = (new WebAssembly.Instance(d, {e:{f:c}})).exports.f;
    }
    d = f;
    K.set(d, e);
    W[d] = e;
  }
  D.set(c, f);
  return f;
};
Object.getOwnPropertyDescriptor(a, "removeFunction") || (a.removeFunction = () => n("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getFuncWrapper") || (a.getFuncWrapper = () => n("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "prettyPrint") || (a.prettyPrint = () => n("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "dynCall") || (a.dynCall = () => n("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getCompilerSetting") || (a.getCompilerSetting = () => n("'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "print") || (a.print = () => n("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "printErr") || (a.printErr = () => n("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getTempRet0") || (a.getTempRet0 = () => n("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "setTempRet0") || (a.setTempRet0 = () => n("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "callMain") || (a.callMain = () => n("'callMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "abort") || (a.abort = () => n("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "keepRuntimeAlive") || (a.keepRuntimeAlive = () => n("'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "zeroMemory") || (a.zeroMemory = () => n("'zeroMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "stringToNewUTF8") || (a.stringToNewUTF8 = () => n("'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "setFileTime") || (a.setFileTime = () => n("'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "abortOnCannotGrowMemory") || (a.abortOnCannotGrowMemory = () => n("'abortOnCannotGrowMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "emscripten_realloc_buffer") || (a.emscripten_realloc_buffer = () => n("'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "ENV") || (a.ENV = () => n("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "withStackSave") || (a.withStackSave = () => n("'withStackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "ERRNO_CODES") || (a.ERRNO_CODES = () => n("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "ERRNO_MESSAGES") || (a.ERRNO_MESSAGES = () => n("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "setErrNo") || (a.setErrNo = () => n("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "inetPton4") || (a.inetPton4 = () => n("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "inetNtop4") || (a.inetNtop4 = () => n("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "inetPton6") || (a.inetPton6 = () => n("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "inetNtop6") || (a.inetNtop6 = () => n("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "readSockaddr") || (a.readSockaddr = () => n("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "writeSockaddr") || (a.writeSockaddr = () => n("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "DNS") || (a.DNS = () => n("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getHostByName") || (a.getHostByName = () => n("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "GAI_ERRNO_MESSAGES") || (a.GAI_ERRNO_MESSAGES = () => n("'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "Protocols") || (a.Protocols = () => n("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "Sockets") || (a.Sockets = () => n("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getRandomDevice") || (a.getRandomDevice = () => n("'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "traverseStack") || (a.traverseStack = () => n("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "convertFrameToPC") || (a.convertFrameToPC = () => n("'convertFrameToPC' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "UNWIND_CACHE") || (a.UNWIND_CACHE = () => n("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "saveInUnwindCache") || (a.saveInUnwindCache = () => n("'saveInUnwindCache' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "convertPCtoSourceLocation") || (a.convertPCtoSourceLocation = () => n("'convertPCtoSourceLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "readAsmConstArgsArray") || (a.readAsmConstArgsArray = () => n("'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "readAsmConstArgs") || (a.readAsmConstArgs = () => n("'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "mainThreadEM_ASM") || (a.mainThreadEM_ASM = () => n("'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "jstoi_q") || (a.jstoi_q = () => n("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "jstoi_s") || (a.jstoi_s = () => n("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getExecutableName") || (a.getExecutableName = () => n("'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "listenOnce") || (a.listenOnce = () => n("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "autoResumeAudioContext") || (a.autoResumeAudioContext = () => n("'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "dynCallLegacy") || (a.dynCallLegacy = () => n("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getDynCaller") || (a.getDynCaller = () => n("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "dynCall") || (a.dynCall = () => n("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "callRuntimeCallbacks") || (a.callRuntimeCallbacks = () => n("'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "wasmTableMirror") || (a.wasmTableMirror = () => n("'wasmTableMirror' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "setWasmTableEntry") || (a.setWasmTableEntry = () => n("'setWasmTableEntry' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getWasmTableEntry") || (a.getWasmTableEntry = () => n("'getWasmTableEntry' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "handleException") || (a.handleException = () => n("'handleException' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "runtimeKeepalivePush") || (a.runtimeKeepalivePush = () => n("'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "runtimeKeepalivePop") || (a.runtimeKeepalivePop = () => n("'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "callUserCallback") || (a.callUserCallback = () => n("'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "maybeExit") || (a.maybeExit = () => n("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "safeSetTimeout") || (a.safeSetTimeout = () => n("'safeSetTimeout' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "asmjsMangle") || (a.asmjsMangle = () => n("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "asyncLoad") || (a.asyncLoad = () => n("'asyncLoad' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "alignMemory") || (a.alignMemory = () => n("'alignMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "mmapAlloc") || (a.mmapAlloc = () => n("'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "reallyNegative") || (a.reallyNegative = () => n("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "unSign") || (a.unSign = () => n("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "reSign") || (a.reSign = () => n("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "formatString") || (a.formatString = () => n("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "PATH") || (a.PATH = () => n("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "PATH_FS") || (a.PATH_FS = () => n("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "SYSCALLS") || (a.SYSCALLS = () => n("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "syscallMmap2") || (a.syscallMmap2 = () => n("'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "syscallMunmap") || (a.syscallMunmap = () => n("'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getSocketFromFD") || (a.getSocketFromFD = () => n("'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getSocketAddress") || (a.getSocketAddress = () => n("'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "JSEvents") || (a.JSEvents = () => n("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerKeyEventCallback") || (a.registerKeyEventCallback = () => n("'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "specialHTMLTargets") || (a.specialHTMLTargets = () => n("'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "maybeCStringToJsString") || (a.maybeCStringToJsString = () => n("'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "findEventTarget") || (a.findEventTarget = () => n("'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "findCanvasEventTarget") || (a.findCanvasEventTarget = () => n("'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getBoundingClientRect") || (a.getBoundingClientRect = () => n("'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "fillMouseEventData") || (a.fillMouseEventData = () => n("'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerMouseEventCallback") || (a.registerMouseEventCallback = () => n("'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerWheelEventCallback") || (a.registerWheelEventCallback = () => n("'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerUiEventCallback") || (a.registerUiEventCallback = () => n("'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerFocusEventCallback") || (a.registerFocusEventCallback = () => n("'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "fillDeviceOrientationEventData") || (a.fillDeviceOrientationEventData = () => n("'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerDeviceOrientationEventCallback") || (a.registerDeviceOrientationEventCallback = () => n("'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "fillDeviceMotionEventData") || (a.fillDeviceMotionEventData = () => n("'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerDeviceMotionEventCallback") || (a.registerDeviceMotionEventCallback = () => n("'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "screenOrientation") || (a.screenOrientation = () => n("'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "fillOrientationChangeEventData") || (a.fillOrientationChangeEventData = () => n("'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerOrientationChangeEventCallback") || (a.registerOrientationChangeEventCallback = () => n("'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "fillFullscreenChangeEventData") || (a.fillFullscreenChangeEventData = () => n("'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerFullscreenChangeEventCallback") || (a.registerFullscreenChangeEventCallback = () => n("'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerRestoreOldStyle") || (a.registerRestoreOldStyle = () => n("'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "hideEverythingExceptGivenElement") || (a.hideEverythingExceptGivenElement = () => n("'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "restoreHiddenElements") || (a.restoreHiddenElements = () => n("'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "setLetterbox") || (a.setLetterbox = () => n("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "currentFullscreenStrategy") || (a.currentFullscreenStrategy = () => n("'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "restoreOldWindowedStyle") || (a.restoreOldWindowedStyle = () => n("'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "softFullscreenResizeWebGLRenderTarget") || (a.softFullscreenResizeWebGLRenderTarget = () => n("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "doRequestFullscreen") || (a.doRequestFullscreen = () => n("'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "fillPointerlockChangeEventData") || (a.fillPointerlockChangeEventData = () => n("'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerPointerlockChangeEventCallback") || (a.registerPointerlockChangeEventCallback = () => n("'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerPointerlockErrorEventCallback") || (a.registerPointerlockErrorEventCallback = () => n("'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "requestPointerLock") || (a.requestPointerLock = () => n("'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "fillVisibilityChangeEventData") || (a.fillVisibilityChangeEventData = () => n("'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerVisibilityChangeEventCallback") || (a.registerVisibilityChangeEventCallback = () => n("'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerTouchEventCallback") || (a.registerTouchEventCallback = () => n("'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "fillGamepadEventData") || (a.fillGamepadEventData = () => n("'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerGamepadEventCallback") || (a.registerGamepadEventCallback = () => n("'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerBeforeUnloadEventCallback") || (a.registerBeforeUnloadEventCallback = () => n("'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "fillBatteryEventData") || (a.fillBatteryEventData = () => n("'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "battery") || (a.battery = () => n("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "registerBatteryEventCallback") || (a.registerBatteryEventCallback = () => n("'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "setCanvasElementSize") || (a.setCanvasElementSize = () => n("'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getCanvasElementSize") || (a.getCanvasElementSize = () => n("'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "demangle") || (a.demangle = () => n("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "demangleAll") || (a.demangleAll = () => n("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "jsStackTrace") || (a.jsStackTrace = () => n("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "stackTrace") || (a.stackTrace = () => n("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getEnvStrings") || (a.getEnvStrings = () => n("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "checkWasiClock") || (a.checkWasiClock = () => n("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "flush_NO_FILESYSTEM") || (a.flush_NO_FILESYSTEM = () => n("'flush_NO_FILESYSTEM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "writeI53ToI64") || (a.writeI53ToI64 = () => n("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "writeI53ToI64Clamped") || (a.writeI53ToI64Clamped = () => n("'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "writeI53ToI64Signaling") || (a.writeI53ToI64Signaling = () => n("'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "writeI53ToU64Clamped") || (a.writeI53ToU64Clamped = () => n("'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "writeI53ToU64Signaling") || (a.writeI53ToU64Signaling = () => n("'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "readI53FromI64") || (a.readI53FromI64 = () => n("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "readI53FromU64") || (a.readI53FromU64 = () => n("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "convertI32PairToI53") || (a.convertI32PairToI53 = () => n("'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "convertU32PairToI53") || (a.convertU32PairToI53 = () => n("'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "setImmediateWrapped") || (a.setImmediateWrapped = () => n("'setImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "clearImmediateWrapped") || (a.clearImmediateWrapped = () => n("'clearImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "polyfillSetImmediate") || (a.polyfillSetImmediate = () => n("'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "Browser") || (a.Browser = () => n("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "funcWrappers") || (a.funcWrappers = () => n("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "getFuncWrapper") || (a.getFuncWrapper = () => n("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "setMainLoop") || (a.setMainLoop = () => n("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "wget") || (a.wget = () => n("'wget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "tempFixedLengthArray") || (a.tempFixedLengthArray = () => n("'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "miniTempWebGLFloatBuffers") || (a.miniTempWebGLFloatBuffers = () => n("'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "heapObjectForWebGLType") || (a.heapObjectForWebGLType = () => n("'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "heapAccessShiftForWebGLHeap") || (a.heapAccessShiftForWebGLHeap = () => n("'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "GL") || (a.GL = () => n("'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "emscriptenWebGLGet") || (a.emscriptenWebGLGet = () => n("'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "computeUnpackAlignedImageSize") || (a.computeUnpackAlignedImageSize = () => n("'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "emscriptenWebGLGetTexPixelData") || (a.emscriptenWebGLGetTexPixelData = () => n("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "emscriptenWebGLGetUniform") || (a.emscriptenWebGLGetUniform = () => n("'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "webglGetUniformLocation") || (a.webglGetUniformLocation = () => n("'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "webglPrepareUniformLocationsBeforeFirstUse") || (a.webglPrepareUniformLocationsBeforeFirstUse = () => n("'webglPrepareUniformLocationsBeforeFirstUse' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "webglGetLeftBracePos") || (a.webglGetLeftBracePos = () => n("'webglGetLeftBracePos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "emscriptenWebGLGetVertexAttrib") || (a.emscriptenWebGLGetVertexAttrib = () => n("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "writeGLArray") || (a.writeGLArray = () => n("'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "AL") || (a.AL = () => n("'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "SDL_unicode") || (a.SDL_unicode = () => n("'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "SDL_ttfContext") || (a.SDL_ttfContext = () => n("'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "SDL_audio") || (a.SDL_audio = () => n("'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "SDL") || (a.SDL = () => n("'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "SDL_gfx") || (a.SDL_gfx = () => n("'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "GLUT") || (a.GLUT = () => n("'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "EGL") || (a.EGL = () => n("'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "GLFW_Window") || (a.GLFW_Window = () => n("'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "GLFW") || (a.GLFW = () => n("'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "GLEW") || (a.GLEW = () => n("'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "IDBStore") || (a.IDBStore = () => n("'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "runAndAbortIfError") || (a.runAndAbortIfError = () => n("'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "warnOnce") || (a.warnOnce = () => n("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "stackSave") || (a.stackSave = () => n("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "stackRestore") || (a.stackRestore = () => n("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "stackAlloc") || (a.stackAlloc = () => n("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "AsciiToString") || (a.AsciiToString = () => n("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "stringToAscii") || (a.stringToAscii = () => n("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "UTF16ToString") || (a.UTF16ToString = () => n("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "stringToUTF16") || (a.stringToUTF16 = () => n("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "lengthBytesUTF16") || (a.lengthBytesUTF16 = () => n("'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "UTF32ToString") || (a.UTF32ToString = () => n("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "stringToUTF32") || (a.stringToUTF32 = () => n("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "lengthBytesUTF32") || (a.lengthBytesUTF32 = () => n("'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "allocateUTF8") || (a.allocateUTF8 = () => n("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
Object.getOwnPropertyDescriptor(a, "allocateUTF8OnStack") || (a.allocateUTF8OnStack = () => n("'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"));
a.writeStackCookie = va;
a.checkStackCookie = M;
Object.getOwnPropertyDescriptor(a, "ALLOC_NORMAL") || Object.defineProperty(a, "ALLOC_NORMAL", {configurable:!0, get:function() {
  n("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
Object.getOwnPropertyDescriptor(a, "ALLOC_STACK") || Object.defineProperty(a, "ALLOC_STACK", {configurable:!0, get:function() {
  n("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
var X;
Q = function Ta() {
  X || Ua();
  X || (Q = Ta);
};
function Ua() {
  function c() {
    if (!X && (X = !0, a.calledRun = !0, !F)) {
      M();
      assert(!N);
      N = !0;
      La(Ba);
      ba(a);
      if (a.onRuntimeInitialized) {
        a.onRuntimeInitialized();
      }
      assert(!a._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
      M();
      if (a.postRun) {
        for ("function" == typeof a.postRun && (a.postRun = [a.postRun]); a.postRun.length;) {
          var d = a.postRun.shift();
          Ca.unshift(d);
        }
      }
      La(Ca);
    }
  }
  if (!(0 < O)) {
    Sa();
    va();
    if (a.preRun) {
      for ("function" == typeof a.preRun && (a.preRun = [a.preRun]); a.preRun.length;) {
        Da();
      }
    }
    La(Aa);
    0 < O || (a.setStatus ? (a.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        a.setStatus("");
      }, 1);
      c();
    }, 1)) : c(), M());
  }
}
a.run = Ua;
if (a.preInit) {
  for ("function" == typeof a.preInit && (a.preInit = [a.preInit]); 0 < a.preInit.length;) {
    a.preInit.pop()();
  }
}
Ua();
function Y() {
}
Y.prototype = Object.create(Y.prototype);
Y.prototype.constructor = Y;
Y.prototype.h = Y;
Y.m = {};
a.WrapperObject = Y;
function Va(c) {
  return (c || Y).m;
}
a.getCache = Va;
function Wa(c, d) {
  var f = Va(d), e = f[c];
  if (e) {
    return e;
  }
  e = Object.create((d || Y).prototype);
  e.g = c;
  return f[c] = e;
}
a.wrapPointer = Wa;
a.castObject = function(c, d) {
  return Wa(c.g, d);
};
a.NULL = Wa(0);
a.destroy = function(c) {
  if (!c.__destroy__) {
    throw "Error: Cannot destroy object. (Did you create it yourself?)";
  }
  c.__destroy__();
  delete Va(c.h)[c.g];
};
a.compare = function(c, d) {
  return c.g === d.g;
};
a.getPointer = function(c) {
  return c.g;
};
a.getClass = function(c) {
  return c.h;
};
function Z() {
  throw "cannot construct a VoidPtr, no constructor in IDL";
}
Z.prototype = Object.create(Y.prototype);
Z.prototype.constructor = Z;
Z.prototype.h = Z;
Z.m = {};
a.VoidPtr = Z;
Z.prototype.__destroy__ = function() {
  Pa(this.g);
};
(function() {
  function c() {
    a.DO_THING = Qa();
    a.DO_NOTHING = Ra();
  }
  N ? c() : Ba.unshift(c);
})();



  return webpParser.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = webpParser;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return webpParser; });
else if (typeof exports === 'object')
  exports["webpParser"] = webpParser;
