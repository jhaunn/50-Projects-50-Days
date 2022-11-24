let replayEl = document.querySelector('#replay');
let countdownEl = document.querySelector('#countdown');
let countdownText = document.querySelector('#countdown h1');
let replayBtn = document.querySelector('#replay button');

let current = 3;

// let startCountdown = setInterval(function() {
//    if (current === 0) {
//       replayEl.classList.remove('hidden');
//       countdownEl.classList.remove('active');
//       replayEl.classList.add('active');
//       countdownEl.classList.add('hidden');

//       current = 3;

//       clearInterval(startCountdown);
//    }

//    current -= 1;
//    countdownText.innerHTML = current.toString();
// }, 1000);

let startCountdown = setInterval(function() {
   if (current === 0) {
      replayEl.classList.remove('hidden');
      countdownEl.classList.remove('active');
      replayEl.classList.add('active');
      countdownEl.classList.add('hidden');
   }

   current -= 1;

   countdownText.innerHTML = current.toString();
}, 1000);

replayBtn.addEventListener('click', (e) => {
   
   current = 4;

   replayEl.classList.remove('active');
   countdownEl.classList.remove('hidden');
   replayEl.classList.add('hidden');
   countdownEl.classList.add('active');

});
