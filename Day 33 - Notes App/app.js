let addBtn = document.querySelector('button');
let board = document.querySelector('#board');

addBtn.addEventListener('click', e => {
   board.innerHTML += 
      `<div class="note">
         <header>
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
         </header>
         <textarea></textarea>
      </div>`;
});