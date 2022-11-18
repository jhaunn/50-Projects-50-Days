let addBtn = document.querySelector('button');
let board = document.querySelector('#board');

addBtn.addEventListener('click', e => {
   let note = document.createElement('div');
   let textarea = document.createElement('textarea');
   note.classList.add('note');
   note.innerHTML = 
      `<header>
         <i class="fa-solid fa-pen-to-square edit"></i>
         <i class="fa-solid fa-trash trash"></i>
      </header>`;
   note.appendChild(textarea);
   board.appendChild(note);

   addNoteFuncs();
});

function addNoteFuncs() {
   let editBtn = document.querySelectorAll('.edit');
   let trashBtn = document.querySelectorAll('.trash');

   editBtn.forEach(element => {
      element.addEventListener('click', e => {
         element.parentElement.parentElement.querySelector('textarea').value = 'Edited';
      });
   });

   trashBtn.forEach(element => {
      element.addEventListener('click', e => {
         element.parentElement.parentElement.remove();
      });
   });
}