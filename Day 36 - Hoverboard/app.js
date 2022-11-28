let board = document.querySelector('#board');

for (let i = 0; i < 500; i++) {
   let key = document.createElement('span');
   key.classList.add('keys');
   board.appendChild(key);
}