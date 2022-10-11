let glasses = document.querySelectorAll('.sub-glass');
let glassRemained = document.querySelector('#glass-remain'); 
let glassFill = document.querySelector('#glass-fill');
let activeGlasses = 0;



for (let i = 0; i < glasses.length; i++) {
   glasses[i].addEventListener('click', () => {
      glasses.forEach(element => {
         element.classList.remove('active');
         activeGlasses = 0;
      });
      for (let j = 0; j <= i; j++) {
         glasses[j].classList.add('active');
         activeGlasses++;
      }

      FillGlass();
   });
}

function FillGlass() {
   let filled = (activeGlasses / 8) * 100;
   let remain = 100 - filled;

   let fillText = document.querySelector('#glass-fill span')
   let remainText = document.querySelector('#glass-remain h2');

   glassFill.style.height = `${filled}%`;
   glassRemained.style.height = `${remain}%`;

   fillText.innerHTML = `${filled}%`;
   remainText.innerHTML = `${2 - (activeGlasses / 4)} L`;
}