let body = document.querySelector('body');
let modeBtn = document.querySelector('#mode');

let needles = document.querySelectorAll('.needle');
let hrNeedle = document.querySelector('#hour');
let minNeedle = document.querySelector('#minute');
let secNeedle = document.querySelector('#second');
let centerpoint = document.querySelector('#centerpoint');

let time = document.querySelector('#time');
let date = document.querySelector('#date');
let day = document.querySelector('#day');

let currentMeridiem;
let currentHour;
let currentMinute;
let currentSec;

let isLight = true;

modeBtn.addEventListener('click', () => {
   if (isLight) {
      body.classList.add('dark')
      modeBtn.classList.add('dark');
      modeBtn.textContent = 'Light Mode';
      
      needles.forEach(element => {
         element.classList.add('dark');
      });
      centerpoint.classList.add('dark');

      time.classList.add('dark');
      day.classList.add('dark');

      isLight = false;
   }
   else {
      body.classList.remove('dark')
      modeBtn.classList.remove('dark');
      modeBtn.textContent = 'Dark Mode';
      
      needles.forEach(element => {
         element.classList.remove('dark');
      });
      centerpoint.classList.remove('dark');

      time.classList.remove('dark');
      day.classList.remove('dark');

      isLight = true;
   }
});

function changeTime() {
   let currentDate = new Date();

   currentHour = currentDate.getHours().toString();
   currentMeridiem = currentHour - 12 >= 0 ? 'PM' : 'AM';
   
   if (currentMeridiem === 'AM') {
      currentHour = currentHour;
   }
   else {
      if  (currentHour == 12) {
         currentHour = currentHour;
      }
      else {
         currentHour -= 12;
      }
   }

   currentMinute = currentDate.getMinutes().toString();
   currentSec = currentDate.getSeconds();

   if (currentMinute < 10)
   {
      currentMinute = `0${currentMinute}`;
   }

   time.textContent = `${currentHour}:${currentMinute} ${currentMeridiem}`;
}

function changeClock() {
   let hrDeg = currentHour * 30;
   let minDeg = currentMinute * 6;
   let secDeg = currentSec * 6;

   hrNeedle.style.transform = `rotate(${hrDeg}deg)`;
   minNeedle.style.transform = `rotate(${minDeg}deg)`;
   secNeedle.style.transform = `rotate(${secDeg}deg)`;
}

function changeDate() {
   let currentDate = new Date();

   let currentDay = currentDate.getDate();
   let currentWeekday = currentDate.getDay();
   let currentMonth = currentDate.getMonth();

   switch (currentWeekday) {
      case 0:
         currentWeekday = 'Sunday';
         break;
      case 1:
         currentWeekday = 'Monday';
         break;
      case 2:
         currentWeekday = 'Tuesday';
         break;
      case 3:
         currentWeekday = 'Wednesday';
         break;
      case 4:
         currentWeekday = 'Thursday';
         break;
      case 5:
         currentWeekday = 'Friday';
         break;
      case 6:
         currentWeekday = 'Saturday';
         break;
      default:
         currentWeekday = 'Dayday';
   }

   switch (currentMonth) {
      case 0:
         currentMonth = 'January';
         break;
      case 1:
         currentMonth = 'February';
         break;
      case 2:
         currentMonth = 'March';
         break;
      case 3:
         currentMonth = 'April';
         break;
      case 4:
         currentMonth = 'May';
         break;
      case 5:
         currentMonth = 'June';
         break;
      case 6:
         currentMonth = 'July';
         break;
      case 7:
         currentMonth = 'August';
         break;
      case 8:
         currentMonth = 'September';
         break;
      case 9:
         currentMonth = 'October';
         break;
      case 10:
         currentMonth = 'November';
         break;
      case 11:
         currentMonth = 'December';
         break;
      default:
         currentMonth = 'Monthember';
   }

   console.log();
   date.innerHTML = `${currentWeekday}, ${currentMonth} <span id="day">${currentDay}</span>`;
}

setInterval(changeTime, 100);
setInterval(changeClock, 100);
setInterval(changeDate, 500);