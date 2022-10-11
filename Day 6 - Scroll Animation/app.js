let containers = document.querySelectorAll(".container");

window.addEventListener('scroll', checkContainers);

checkContainers();

function checkContainers() {
   let trigger = window.innerHeight / 5 * 4;

   containers.forEach(a => {
      let containerTop = a.getBoundingClientRect().top;

      if (containerTop < trigger) {
         a.classList.add('visible');
         a.classList.remove('invisible');
      } else {
         a.classList.add('invisible');
         a.classList.remove('visible');
      }
   });
}