let containers = document.querySelectorAll('.container');
let activeContainer;

containers.forEach(element => {
   element.addEventListener('click', () => {
      activeContainer = element;
      
      containers.forEach(element => {
         if (activeContainer === element) {
            element.style.width = '75%';
         } 
         else {
            element.style.width = '25%';
         }
      });
   });
});
