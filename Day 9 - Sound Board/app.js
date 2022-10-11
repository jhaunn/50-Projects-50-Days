let soundEffects = document.querySelectorAll('audio');
let soundContainers = document.querySelectorAll('.container');

for (let i = 0; i < soundContainers.length; i++) {
   soundContainers[i].addEventListener('click', () => {
      soundEffects.forEach(element => {
         element.pause();
         element.currentTime = 0;
      });

      soundEffects[i].play();
   });
}