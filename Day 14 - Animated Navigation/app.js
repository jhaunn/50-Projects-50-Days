let nav = document.querySelector('nav');
let navUl = document.querySelector('ul');
let navLi = document.querySelectorAll('li');
let btn = document.querySelector('button');
let isHide = false;

btn.addEventListener('click', () => {
   if (isHide) {
      nav.classList.remove('hide');
      navUl.classList.remove('hide');
      navLi.forEach(element => {
         element.classList.remove('hide');
      });
      btn.classList.remove('hide');
      isHide = false;
   } 
   else {
      nav.classList.add('hide');
      navUl.classList.add('hide');
      navLi.forEach(element => {
         element.classList.add('hide');
      });
      btn.classList.add('hide');
      isHide = true;
   }
});