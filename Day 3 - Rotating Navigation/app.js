let rotateButton = document.querySelector("#rotate");
let main = document.querySelector("main");
let nav = document.querySelector("nav");
let navContent
let navIsActive;

if (main.classList.contains('reset-main')) {
   navIsActive = false;
}
else {
   navIsActive = true;
}

rotateButton.addEventListener('click', function() {
   if (window.scrollY === 0)
   {
      if (navIsActive) {
      main.classList.remove("rotate-main");
      main.classList.add("reset-main"); 
      nav.classList.remove("show-nav");
      nav.classList.add("hide-nav");
      navIsActive = false;
      }
      else {
         main.classList.remove("reset-main");
         main.classList.add("rotate-main");  
         nav.classList.remove("hide-nav");
         nav.classList.add("show-nav");
         navIsActive = true;
      }
   }
   
})