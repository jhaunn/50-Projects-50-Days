let image = document.querySelector('#image');
let buttons = document.querySelectorAll('button');
let imagesURL = [
   './Images/Home.jpg',
   './Images/Work.jpg',
   './Images/Blog.jpg',
   './Images/AboutUs.jpg'
];

for (let index = 0; index < buttons.length; index++) {
   buttons[index].addEventListener('click', e => {
      image.style.backgroundImage = `url(${imagesURL[index]})`;
      
      buttons.forEach(element => {
         element.classList.remove('active');
      });

      buttons[index].classList.add('active');
   });
}