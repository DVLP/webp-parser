const imageX = 1024
const imageY = 1024
var imageSize = [imageX, imageY]
var imageBuffer = null;

const texWorker = createWorker('./js/webp-parser.js', [
  'webpGetInfo',
  'webpDecode',
])

var image = document.getElementById('src-image')
var targetCanvas1 = document.getElementById('target-canvas-1')
var targetCanvas2 = document.getElementById('target-canvas-2')

async function getInfo() {
  texWorker['webpGetInfo']({ 'imageBuffer': imageBuffer }, (result) => {
    console.log('APP: webpGetInfo', result)
  })
}


async function decode() {
  texWorker['webpDecode']({ 'imageBuffer': imageBuffer }, (result) => {
    console.log('APP: webpDecode', result)
  })
}

async function previewCodedBuffer() {
  drawInCanvas(imageBuffer, 1024, 1024)
}

var canvas = document.getElementById('source-canvas-1')
var ctx = canvas.getContext('2d')

function drawInCanvas(result, width, height) {
  targetCanvas1.width = width
  targetCanvas1.height = height
  const imageData = ctx.createImageData(width, height);
  imageData.data.set(new Uint8ClampedArray(result.buffer))
  console.log('Drawing in canvas', imageData.data)
  targetCanvas1.getContext('2d').putImageData(imageData, 0, 0)
}

function loadImage(target) {
  image.src = target.value
}

const input = document.createElement('input');
input.type = 'file';
document.body.append(input);
input.addEventListener('change', async event => {
  const ab = await input.files[0].arrayBuffer();
  imageBuffer = new Uint8Array(ab);
  console.log('New image dropped')
});

fetch('/images/heroimage.webp').then(async (response) => {
  const arrayBuffer = await response.arrayBuffer()
  const littleEndianArrayBuffer = new DataView(arrayBuffer).getInt32(0, true)

  texWorker['webpGetInfo']({ 'imageBuffer': littleEndianArrayBuffer }, (result) => {
    console.log('APP: webGetInfo', result)
  })
})

