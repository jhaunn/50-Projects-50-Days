let textEl = document.querySelector('h1');
textEl.innerHTML = '';
let speedEl = document.querySelector('input');

const text = 'Lorem, ipsum dolor.';
let index = 0;

function addText() {
   if (index == text.length + 1) {
      index = 0;
   }

   textEl.innerText = text.slice(0, index);

   index++;
}

let myInterval = setInterval(function() {
   addText();
}, 1000 / speedEl.value);

speedEl.addEventListener('click', e => {
   e.preventDefault();
   clearInterval(myInterval);

   myInterval = setInterval(function() {
      addText();
   }, 1000 / speedEl.value);
});