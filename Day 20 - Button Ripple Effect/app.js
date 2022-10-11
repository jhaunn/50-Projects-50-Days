let btn = document.querySelector('button');
let circ = document.querySelector('.circle');

btn.addEventListener('click', (e) => {
   let x = e.clientX;
   let y = e.clientY;

   let buttonTop = e.target.offsetTop;
   let buttonLeft = e.target.offsetLeft;

   let xInside = x - buttonLeft;
   let yInside = y - buttonTop;

   btn.innerHTML= `Click Me<span class="circle" style="top: ${yInside}px; left: ${xInside}px;"></span>`;
});