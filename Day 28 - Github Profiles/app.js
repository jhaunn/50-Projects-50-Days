const APIURL = 'https://api.github.com/users/'

const form = document.querySelector('form');
const main = document.querySelector('main');
const search = document.querySelector('input');

async function getUser(username) {
   try {
      const { data } = await axios(APIURL + username);

      createCard(data);
   }
   catch(err) {
      if (err.response.status == 404) {
         createError();
      }
   }
}

function createCard(user) {
   const cardValue = `
      <div id="card">
         <img src="${user.avatar_url}">
         <h1>${user.name}</h1>
         <p>
            ${user.bio}
         </p>
         <ul id="stats">
            <li>${user.followers} Followers</li>
            <li>${user.following} Following</li>
            <li>${user.public_repos} Repos</li>
         </ul>
         <ul id="tags">
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem.</li>
            <li>Lorem, ipsum.</li>
         </ul>
      </div>
   `;

   main.innerHTML = cardValue;
}

function createError() {
   const cardValue = `
      <div id="card" class="error">
         <h1>No profile with this username</h1>
      </div>
   `;

   main.innerHTML = cardValue;
}

form.addEventListener('submit', (e) => {
   e.preventDefault();
   
   const user = search.value;

   if (user) {
      getUser(user);

      search.value = '';
   }
})