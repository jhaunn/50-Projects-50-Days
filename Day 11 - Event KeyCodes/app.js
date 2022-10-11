let intro = document.querySelector('#intro');
let eventContainers = document.querySelectorAll('.event-container');
let eventKey = document.querySelector('#event-key');
let eventKeyCode = document.querySelector('#event-keycode');
let eventCode = document.querySelector('#event-code');

window.addEventListener('keydown', (e) => {
   intro.classList.add('hidden');
   eventContainers.forEach(a => {
      a.classList.remove('hidden');
   });

   eventKey.textContent = e.key;
   eventKeyCode.textContent = e.keyCode;
   eventCode.textContent = e.code;
});