let buttonUp = document.querySelector("#up");
let buttonDown = document.querySelector("#down");

let imgSide = document.querySelectorAll("#image-side");
let textSide = document.querySelectorAll("#text-side");

let imgY = 0;
let textY = -400;

buttonUp.addEventListener("click", ()=> {
   if (imgY > -400) {
      imgY += -100;
      textY += 100;
   }
   else {
      imgY = 0;
      textY = -400;
   }

   updateTransform();
})

buttonDown.addEventListener("click", ()=> {
   if (imgY < 0) {
      imgY += 100;
      textY += -100;
   }
   else {
      imgY = -400;
      textY = 0;
   }
   
   updateTransform();
})

function updateTransform() {
   imgSide.forEach(element => {
      element.style.transform = `translateY(${imgY}vh)`;
   });

   textSide.forEach(element => {
      element.style.transform = `translateY(${textY}vh)`;
   });
}