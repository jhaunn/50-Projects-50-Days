//Use set timeout to execute a function after some time

function loadScene() {
   document.querySelector('#card').innerHTML = `<img src="./Images/wallpaperflare.com_wallpaper.jpg" alt="" id="wallpaper">
         <div id="content">
            <h1 id="title">Lorem, ipsum.</h1>
            <p id="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, accusamus.</p>
            <div id="user">
               <img src="./Images/スパカブEp3.png" alt="" id="dp">
               <span id="name">Lorem, ipsum.</span>
               <span id="date">Sept 06, 2022</span>
            </div>
         </div>`;
}

setTimeout(loadScene, 5000);