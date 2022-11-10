const photo = document.querySelector('#photo');
const counterEl = document.querySelector('p');
let counter = 0;

photo.addEventListener('dblclick', (e) => {
   counter++;
   
   counterEl.innerHTML = `You liked it ${counter} times`;
});