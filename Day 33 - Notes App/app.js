let addBtn = document.querySelector('button');
let board = document.querySelector('#board');
let notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
   notes.forEach(element => {
      addNotes(element);
   });
}

addBtn.addEventListener('click', e => {
   addNotes('');
});

function addNotes(content) {
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

   textarea.addEventListener('input', e => {
      updateStorage();
   });

   textarea.value = content;

   updateStorage();

   addNoteFuncs();
}

function addNoteFuncs() {
   let readonly = false;
   let editBtn = document.querySelectorAll('.edit');
   let trashBtn = document.querySelectorAll('.trash');

   editBtn.forEach(element => {
      element.addEventListener('click', e => {
         element.parentElement.parentElement.querySelector('textarea').readOnly = !element.parentElement.parentElement.querySelector('textarea').readOnly;
         updateStorage();
      });
   });

   trashBtn.forEach(element => {
      element.addEventListener('click', e => {
         element.parentElement.parentElement.remove();
         updateStorage();
      });
   });
}

function updateStorage() {
   let textareas = document.querySelectorAll('textarea');

   let notes = [];

   textareas.forEach(element => {
      notes.push(element.value)
   });

   localStorage.setItem('notes', JSON.stringify(notes));
}