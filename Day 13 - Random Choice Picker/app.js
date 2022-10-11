let choices = document.querySelector('#choices');
let textArea = document.querySelector('textarea');
let choiceArr = textArea.value.split(',');

textArea.addEventListener('keydown', (e) => {
   setTimeout(() => {
      createChoice();
   }, 10);
});

window.addEventListener('keydown', (e) => {
   setTimeout(() => {
      if (e.key === 'Enter' && choiceArr.length > 1) {
         pickRandomChoice();
      }
   }, 10);
});

function createChoice() {
   choiceArr = textArea.value.split(',');
      
   choices.innerHTML = '';

   choiceArr.forEach(a => {
      let choiceEl = document.createElement('p');
      choiceEl.classList.add('choice');
      choiceEl.innerText = a.trim();
      choices.appendChild(choiceEl);
   });
}

function pickRandomChoice() {
   let randChoice = document.querySelectorAll('.choice');
   let choice = randChoice[Math.floor(Math.random() * choiceArr.length)];

   
   setTimeout(() => {
      randChoice.forEach(a => {
         a.classList.remove('active');
      });

      choice.classList.add('active');
   }, 250);
}