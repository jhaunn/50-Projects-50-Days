let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let increaseBtn = document.querySelector('#increase');
let decreaseBtn = document.querySelector('#decrease');
let resetBtn = document.querySelector('#reset');
let sizeText = document.querySelector('#size');

let minSize = 1;
let maxSize = 50;
let size = 20;
let color = 'black';

let isPressed = false;

canvas.addEventListener('mousedown', (e) => {
   isPressed = true;
});

canvas.addEventListener('mouseup', (e) => {
   isPressed = false;
});

canvas.addEventListener('mousemove', (e) => {
   if (isPressed) {
      let x = e.offsetX;
      let y = e.offsetY;

      drawCircle(x, y);
   }
});

increaseBtn.addEventListener('click', () => {
   if (size < maxSize) {
      size++;
   }

   sizeText.textContent = size;
});

decreaseBtn.addEventListener('click', () => {
   if (size > minSize) {
      size--;
   }

   sizeText.textContent = size;
});

resetBtn.addEventListener('click', () => {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function drawCircle(x, y) {
   ctx.beginPath();
   ctx.arc(x, y, size, 0, Math.PI * 2);
   ctx.fillStyle = color;
   ctx.fill();
}