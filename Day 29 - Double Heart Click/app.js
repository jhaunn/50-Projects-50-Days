const photo = document.querySelector('#photo');
const counterEl = document.querySelector('p');
let counter = 0;

photo.addEventListener('dblclick', (e) => {
   counter++;

   const x = e.clientX;
   const y = e.clientY;

   const leftOffset = e.target.offsetLeft;
   const topOffset = e.target.offsetTop;

   const xInside = x - leftOffset;
   const yInside = y - topOffset;

   const heart = document.createElement('i');
   heart.classList.add('fa-solid');
   heart.classList.add('fa-heart');
   heart.classList.add('heart');

   heart.style.top = `${yInside}px`;
   heart.style.left = `${xInside}px`;
   
   counterEl.innerHTML = `You liked it ${counter} times`;
   photo.appendChild(heart);
});