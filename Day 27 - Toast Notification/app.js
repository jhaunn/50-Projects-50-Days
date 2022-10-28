let btn = document.querySelector("button");
let notifBar = document.querySelector("#notif-bar");
let notifs = ["<div class=\"notif one\">Message One</div>",
         "<div class=\"notif two\">Message Two</div>",
         "<div class=\"notif three\">Message Three</div>",
         "<div class=\"notif four\">Message Four</div>"];

let currNotif = 0;

btn.addEventListener("click", ()=> {
   currNotif++;

   notifBar.innerHTML += notifs[Math.floor(Math.random()*notifs.length)];

   setTimeout(function(){
      if (currNotif == 1) {
         notifBar.innerHTML = "";
      }
      else {
         notifBar.firstChild.remove();
      }

      currNotif--;
   }, 5000);
});