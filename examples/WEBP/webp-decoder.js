const viewToHeap = {
  'Int8Array': 'HEAP8', 'Int16Array': 'HEAP16', 'Int32Array': 'HEAP32', 'Uint8Array': 'HEAPU8', 'Uint16Array': 'HEAPU16',
  'Uint32Array': 'HEAPU32', 'Float32Array': 'HEAPF32', 'Float64Array': 'HEAPF364',
}
function array2Heap(module, arrTyped, size) {
  var heap = module[viewToHeap[arrTyped.name]]
  var bytes = arrTyped.BYTES_PER_ELEMENT
  var byteSize = size * bytes
  var ptr = module._malloc(byteSize)
  var offset = ptr / bytes
  
  heap.set(new arrTyped(size), size)
  return {
    'data': heap.subarray(offset, offset + size),
    'offset': ptr,
    inUse: false,
    free: () => module._free(ptr)
  }
}

function importClassicScript(url){
  const script = document.createElement("script")
  script.type = "text/javascript";
  script.src = url;

  const p = new Promise(resolve => script.onload = resolve);
  document.body.appendChild(script);
  return p;
}

self.Module = typeof self.Module !== "undefined" ? self.Module : {};

class BMPImageEncoder {
  static encode(imageData) {
    const offset = 54;

    const padding = imageData.width % 4;
    const pixelArraySize = imageData.height * (3 * imageData.width + padding);
    const bitsPerPixel = 24;
    const sizeInBytes = pixelArraySize * (bitsPerPixel / 8) + offset;

    let bmpBuffer = new DataView(new ArrayBuffer(sizeInBytes));

    // Bitmap file header
    bmpBuffer.setUint8(0, "B".charCodeAt(0));
    bmpBuffer.setUint8(1, "M".charCodeAt(0));
    bmpBuffer.setUint32(2, sizeInBytes, true);
    bmpBuffer.setUint32(6, /* reserved */ 0, true);
    bmpBuffer.setUint32(10, offset, true);

    // DIB header (bitmap info header) - Here "Windows BITMAPINFOHEADER"
    const headerSize = 40;
    bmpBuffer.setUint32(14, headerSize, true);
    bmpBuffer.setUint32(18, imageData.width, true);
    bmpBuffer.setUint32(22, imageData.height, true);
    bmpBuffer.setUint16(26, /* planes */ 1, true);
    bmpBuffer.setUint16(28, bitsPerPixel, true);
    bmpBuffer.setUint32(30, /* compression method: BI_RGB (none) */ 0, true);
    bmpBuffer.setUint32(34, /* image size, dummy 0 for BI_RGB */ 0, true);
    bmpBuffer.setUint32(38, /* horizontal resolution pixel per meter */ 0, true);
    bmpBuffer.setUint32(42, /* vertical resolution pixel per meter */ 0, true);
    bmpBuffer.setUint32(46, /* colors in color palette */ 0, true);
    bmpBuffer.setUint32(50, /* important colors, generally ignored */ 0, true);

    // Pixel array
    const rowSize = Math.floor((24 * imageData.width + 31) / 32) * 4;

    let i = 0;
    for (let y = imageData.height - 1; y >= 0; y--) {
      for (let x = 0; x < imageData.width; x++) {
        let pos = offset + y * rowSize + x * 3;
        bmpBuffer.setUint8(pos + 2, imageData.data[i++], true); // red
        bmpBuffer.setUint8(pos + 1, imageData.data[i++], true); // green
        bmpBuffer.setUint8(pos, imageData.data[i++], true); // blue
        if (!imageData.rgb) { // Skip alpha
          i++;
        }
      }

      const fillOffset = offset + y * rowSize + imageData.width * 3;
      switch(padding) {
        case 3:
          bmpBuffer.setUint8(fillOffset, 0, true);
        case 2:
          bmpBuffer.setUint8(fillOffset + 1, 0, true);
        case 1:
          bmpBuffer.setUint8(fillOffset + 2, 0, true);
      }
    }

    return new Blob([bmpBuffer], { type : 'image/bmp' });
  }
}

// DO NOT MODIFY - must be exactly the same formula as on C++ side
function ofPow2(v) {
  v *= 0.8; // lower by 20% so numbers closer to lower power of 2 won't get unreasonably upscaled i.e. 257 to 512 instead of 256
  // find the next power of 2
  v = Math.trunc(v) - 1;
  v |= v >> 1;
  v |= v >> 2;
  v |= v >> 4;
  v |= v >> 8;
  v |= v >> 16;
  v++;
  return v;
}

export async function fetchWebPDecoder() {
  Module = await webpParser()

  const version = Module.cwrap('version', 'number', []);
  const getInfo = Module.cwrap('getInfo', 'number', ['number', 'number']);
  const decode = Module.cwrap('decode', 'number', ['number', 'number']);

  const webpGetInfo = Module.cwrap('webpGetInfo', 'number', ['number', 'number', 'number']);

  class WebPDecoder {
    constructor(buffer) {
      this.size = buffer.byteLength;
      this.ptr = Module._malloc(this.size);
      Module.HEAPU8.set(new Uint8Array(buffer), this.ptr);
    }

    info() {
      const ptr = getInfo(this.ptr, this.size);
      const success = !!Module.getValue(ptr, "i32");
      if (!success) {
        Module._free(ptr);
        return { width: null, height: null };
      }
      const width = Module.getValue(ptr + 4, "i32");
      const height = Module.getValue(ptr + 8, "i32");

      Module._free(ptr);

      return { width, height };
    }

    // same as above but instead of using getValue using Uint32Array view on heap
    webpInfo() {
      var targetArr = array2Heap(Module, Uint32Array, 2)
      webpGetInfo(targetArr.offset, this.ptr, this.size);
      const width = targetArr.data[1]
      const height = targetArr.data[2]
      targetArr.free()
      return { width, height };
    }

    decode() {
      let { width, height } = this.info();
      const resultPtr = decode(this.ptr, this.size);
      const resultView = new Uint8Array(Module.HEAPU8.buffer, resultPtr, width * height * 4);
      const result = new Uint8ClampedArray(resultView);
      Module._free(resultPtr);
      return result;
    }

    decodeToBMP() {
      let { width, height } = this.info();

      const result = this.decode();
      const img = new ImageData(result, width, height);

      return BMPImageEncoder.encode(img);
    }

    decodeToBlob(canvas) {
      let { width, height } = this.info();

      const result = this.decode();
      const img = new ImageData(result, width, height);

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.putImageData(img, 0, 0);

      if (typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) {
        if (canvas.convertToBlob) {
          return canvas.convertToBlob({ type: "image/png", quality: 1});
        } else {
          return canvas.toBlob("image/png", 1); // Firefox API.
        }
      }

      return new Promise(resolve => {
        canvas.toBlob(blob => resolve(blob));
      });
    }

    version() {
      return version();
    }
  }

  return WebPDecoder;
}