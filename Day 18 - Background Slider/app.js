let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');

let body = document.querySelector('body');
let slide = document.querySelector('#slide');

let maxImages = 5;
let currentSlide = 0;

leftArrow.addEventListener("click", () => {
   if (currentSlide == 0)
   {
      currentSlide = maxImages - 1;
   }
   else
   {
      currentSlide--;
   }

   slide.style.backgroundImage = `url("./Images/wallpaper (${currentSlide}).jpg")`;
   body.style.backgroundImage = `url("./Images/wallpaper (${currentSlide}).jpg")`;
});

rightArrow.addEventListener("click", () => {
   if (currentSlide == maxImages - 1)
   {
      currentSlide = 0;
   }
   else
   {
      currentSlide++;
   }

   slide.style.backgroundImage = `url("./Images/wallpaper (${currentSlide}).jpg")`;
   body.style.backgroundImage = `url("./Images/wallpaper (${currentSlide}).jpg")`;
});