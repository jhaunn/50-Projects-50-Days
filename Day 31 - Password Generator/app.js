let lengthEl = document.querySelector('#password-length');
let uppercaseEl = document.querySelector('#uppercase');
let lowercaseEl = document.querySelector('#lowercase');
let numbersEl = document.querySelector('#numbers');
let symbolsEl = document.querySelector('#symbols');
let resultEl = document.querySelector('#password');
let clipboardBtn = document.querySelector('#clipboard');
let generateBtn = document.querySelector('#generate');
let randoms = [];
let result = "";

function getRandomLower() {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
   const symbols = '!@#$%^&*(){}[]=<>,.'
   return symbols[Math.floor(Math.random() * symbols.length)];
}

generateBtn.addEventListener('click', e => {
   randoms = [];

   if (uppercaseEl.checked) {
      randoms.push(getRandomUpper);
   }
   if (lowercaseEl.checked) {
      randoms.push(getRandomLower);
   }
   if (numbersEl.checked) {
      randoms.push(getRandomNumber);
   }
   if (symbolsEl.checked) {
      randoms.push(getRandomSymbol);
   }

   result = "";

   try {
      for (let index = 0; index < +lengthEl.value; index++) {
         result += randoms[Math.floor(Math.random() * randoms.length)]();
      }
   } catch (error) {
      result = "";
   }
   

   resultEl.innerHTML = result;
});

clipboardBtn.addEventListener('click', e => {
   let textarea = document.createElement('textarea');

   if (!result) {
      return;
   }

   textarea.value = result;
   document.body.appendChild(textarea);
   textarea.select();
   navigator.clipboard.writeText(textarea.value);
   textarea.remove();
   alert(`Password copied to clipboard!`);
})