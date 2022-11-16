let checkboxes = document.querySelectorAll('input');
let good = document.querySelector('#good');
let cheap = document.querySelector('#cheap');
let fast = document.querySelector('#fast');
let lastClicked;

checkboxes.forEach(element => {
   element.addEventListener('change', e => {
      lastClicked = element;

      if (good.checked && cheap.checked && fast.checked) {
         if (lastClicked === good) {
            fast.checked = false;
         }

         if (lastClicked === cheap) {
            good.checked = false;
         }

         if (lastClicked === fast) {
            cheap.checked = false;
         }
      }
   });
});
