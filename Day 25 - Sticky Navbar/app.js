let nav = document.querySelector('nav');

window.addEventListener('scroll', scrollNav);

function scrollNav() {
   if (window.scrollY > nav.offsetHeight + 500) {
      nav.classList.add('scroll');
   }
   else {
      nav.classList.remove('scroll');
   }
}