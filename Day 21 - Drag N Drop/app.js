let image = document.querySelector('img');
let containers = document.querySelectorAll('.container');
let isDragging = false;
let currentContainer;

image.addEventListener('drag', (e) => {
   isDragging = true;
})
image.addEventListener('dragend', (e) => {
   isDragging = false;

   if (containers.innerHTML == null) {
      containers[currentContainer].appendChild(image);
   }
})

for (let i = 0; i < containers.length; i++) {
   containers[i].addEventListener('dragover', (e) => {
      if (isDragging)
      {
         e.preventDefault();
      }
   });

   containers[i].addEventListener('dragenter', (e) => {
      if (isDragging)
      {
         e.preventDefault();
         containers[i].innerHTML = '';
         containers[i].classList.add('hovered');
      }
         
   });

   containers[i].addEventListener('dragleave', (e) => {
      if (isDragging)
      {
         e.preventDefault();
         containers[i].classList.remove('hovered');
      }
         
   });

   containers[i].addEventListener('drop', () => {
      if (isDragging)
      {
         containers[i].classList.remove('hovered');
         containers[i].appendChild(image);
         currentContainer = i;
         console.log(currentContainer);
      }
   });
}

// containers.forEach(element => {
//    element.addEventListener('dragover', (e) => {
//       if (isDragging)
//       {
//          e.preventDefault();
//       }
//    });

//    element.addEventListener('dragenter', (e) => {
//       if (isDragging)
//       {
//          e.preventDefault();
//          element.innerHTML = '';
//          element.classList.add('hovered');
//       }
         
//    });

//    element.addEventListener('dragleave', (e) => {
//       if (isDragging)
//       {
//          e.preventDefault();
//          element.classList.remove('hovered');
//       }
         
//    });

//    element.addEventListener('drop', () => {
//       if (isDragging)
//       {
//          element.classList.remove('hovered');
//          element.appendChild(image);
//       }
//    });
// });