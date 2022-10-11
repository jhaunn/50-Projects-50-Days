let followCount = document.querySelectorAll('.follower-count');
let initialFollowCount = [0, 0, 0];
let currentFollowCount = [0, 0, 0];

for (let i = 0; i < followCount.length; i++) {
   initialFollowCount[i] = followCount[i].innerHTML;

   function increaseCount() {
      currentFollowCount[i] += 6;

      if (currentFollowCount[i] >= initialFollowCount[i]) {
         clearInterval(progress);
      }

      followCount[i].innerHTML = `${currentFollowCount[i]}`;
   }

   let progress = setInterval(increaseCount, 1);
}