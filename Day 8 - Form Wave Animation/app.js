let labels = document.querySelectorAll('label');
let inputs = document.querySelectorAll('input');
let emailChildren = document.querySelectorAll('#email span');
let passwordChildren = document.querySelectorAll('#password span');
let delayMultiplier = 0.05;

inputs[0].addEventListener('focus', () => {
   emailChildren.forEach(element => {
      for (let i = 0; i < emailChildren.length; i++) {
         emailChildren[i].style.transitionDelay = (i * delayMultiplier) + 's';
         emailChildren[i].classList.add('focused');
      }
   });
});

inputs[0].addEventListener('focusout', () => {
   if (inputs[0].value !== '') {
      for (let i = 0; i < emailChildren.length; i++) {
         emailChildren[i].style.transitionDelay = (i * delayMultiplier) + 's';
         emailChildren[i].classList.add('focused');
      }
   } 
   else {
      for (let i = 0; i < emailChildren.length; i++) {
         emailChildren[i].style.transitionDelay = (i * delayMultiplier) + 's';
         emailChildren[i].classList.remove('focused');
      }
   }
});

inputs[1].addEventListener('focus', () => {
   for (let i = 0; i < passwordChildren.length; i++) {
         passwordChildren[i].style.transitionDelay = (i * delayMultiplier) + 's';
         passwordChildren[i].classList.add('focused');
   }
});

inputs[1].addEventListener('focusout', () => {
   if (inputs[1].value !== '') {
      for (let i = 0; i < passwordChildren.length; i++) {
         passwordChildren[i].style.transitionDelay = (i * delayMultiplier) + 's';
         passwordChildren[i].classList.add('focused');
      }  
   } 
   else {
      for (let i = 0; i < passwordChildren.length; i++) {
         passwordChildren[i].style.transitionDelay = (i * delayMultiplier) + 's';
         passwordChildren[i].classList.remove('focused');
      }
   }
});