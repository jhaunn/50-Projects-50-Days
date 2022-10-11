let faqContainer = document.querySelectorAll('.faq-container');
let downButton = document.querySelectorAll('.fa-chevron-down');
let xButton = document.querySelectorAll('.fa-times');
let faqAnswer = document.querySelectorAll('.faq-answer');

for (let i = 0; i < faqContainer.length; i++) {
   faqContainer[i].addEventListener('click', () => {
       if (faqAnswer[i].classList.contains('inactive')) {
          faqContainer[i].classList.remove('inactive');
          faqAnswer[i].classList.remove('inactive');
          xButton[i].classList.remove('inactive');
          downButton[i].classList.add('inactive');
          
       }
       else {
          faqContainer[i].classList.add('inactive');
          faqAnswer[i].classList.add('inactive');
          xButton[i].classList.add('inactive');
          downButton[i].classList.remove('inactive');
       }
   });
}