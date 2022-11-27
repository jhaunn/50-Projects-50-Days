let carousel = document.querySelector('#carousel'); 
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
let current = 0;

nextBtn.addEventListener('click', e => {
   if(current < carousel.querySelectorAll('img').length - 1) {
      current++;
   }
   else{
      current = 0;
   }

   carousel.querySelectorAll('img').forEach(element => {
      element.style.transform = `translate(${-current * 100}%)`;
   });
});

prevBtn.addEventListener('click', e => {
   if(current > 0) {
      current--;
   }
   else {
      current = carousel.querySelectorAll('img').length - 1;
   }

   carousel.querySelectorAll('img').forEach(element => {
      element.style.transform = `translate(${-current * 100}%)`;
   });
});