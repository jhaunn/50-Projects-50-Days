let images = document.querySelectorAll(".container");

images.forEach((a) => {
   a.addEventListener("click", () => {
      inactivateClasses();
      a.classList.add("active");
   });
});

function inactivateClasses () {
   images.forEach((a) => {
      a.classList.remove("active");
   });
}