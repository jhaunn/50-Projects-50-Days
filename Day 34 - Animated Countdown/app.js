let countdownText = document.querySelector('#countdown h1');

let current = 3;

let startCountdown = setInterval(function() {
   if (current === 1) {
      clearInterval(startCountdown);
   }

   current -= 1;
   countdownText.innerHTML = current.toString();
}, 1000);