let bg = document.querySelector("#background");
let load = document.querySelector("#load");

let imageBlurVal = 0;
let loadOpacVal = 1;
let loadVal = 0;
let delayInMsec = 50;  

let waitForMsec = (delay) => new Promise((resolve) => setTimeout(resolve,delay));

async function increaseLoad() {
   for (let i=0; i < 100; i++) {
      await waitForMsec(delayInMsec);

      loadVal++;
      load.textContent = loadVal + '%';

      loadOpacVal = 1 - loadVal / 100;
      load.style.opacity = loadOpacVal;

      imageBlurVal = Math.abs((loadVal-100) / 5);
      bg.style.filter = `blur(${imageBlurVal}px)`;
   }

   
}

increaseLoad();
