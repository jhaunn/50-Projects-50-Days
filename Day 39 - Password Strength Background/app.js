let background = document.querySelector('#background');
let passwordInput = document.querySelector('#password input');
let blurVal = 10;
let strength = 0;

background.style.filter = `blur(${blurVal}px)`;

passwordInput.addEventListener('input', e => {
   console.log(passwordInput.value.length);
   console.log(10 - (passwordInput.value.length / 8) * 10);

   background.style.filter = `blur(${blurVal-((passwordInput.value.length / 8) * blurVal)}px)`;
});