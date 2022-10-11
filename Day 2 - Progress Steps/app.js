 let circles = document.querySelectorAll(".circle");
 let bars = document.querySelectorAll(".bar");
 let currentProgress = 0;

let nextButton = document.querySelector("#next");
let prevButton = document.querySelector("#prev");

nextButton.addEventListener("click", function() {
   if (currentProgress < circles.length) {
      currentProgress++;
   }
   
   updateProgress();
})

prevButton.addEventListener("click", function() {
   if (currentProgress > -1) {
      currentProgress--;
   }

   
   updateProgress();
})

function updateProgress() {
   for(let i=0; i < circles.length; i++) {
      if (i < currentProgress) {
         circles[i].classList.add("active");
         circles[i].classList.remove("inactive");

         if (currentProgress >= 2) {
            let a = (currentProgress - 1) * 120;
            bars[0].style.width = a + "px";
         } else {
            bars[0].style.width = "0px";
         }
      } else {
         circles[i].classList.add("inactive");
         circles[i].classList.remove("active");

         // if (currentProgress >= 1 && i >= 1) {
         //    bars[i - 1].classList.add("inactive");
         //    bars[i - 1].classList.remove("active");
         // }
      }
   }

   if (currentProgress === 0) {
      prevButton.disabled = true;
   } 
   else if (currentProgress === circles.length) {
      nextButton.disabled = true;
   } 
   else {
      prevButton.disabled = false;
      nextButton.disabled = false;
   }
}