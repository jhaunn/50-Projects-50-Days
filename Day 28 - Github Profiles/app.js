const APIURL = 'https://api.github.com/users/'

const form = document.querySelector('form');
const main = document.querySelector('main');
const search = document.querySelector('input');

async function getUser(username) {
   try {
      const { data } = await axios(APIURL + username);

      createCard(data);
      getRepos(username);
   }
   catch(err) {
      if (err.response.status == 404) {
         createError();
      }
   }
}

async function getRepos(username) {
   try {
      const { data } = await axios(APIURL + username + '/repos?sort=created');

      CreateRepos(data);
   }
   catch(err) {
      createError();
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
         <ul id="tags"></ul>
      </div>
   `;

   main.innerHTML = cardValue;
}

function CreateRepos(data) {
   const tags = document.querySelector('#tags');

   data.slice(0,5).forEach(element => {
      const repoEl = document.createElement('li');
      repoEl.innerText = element.name;
      tags.appendChild(repoEl);
   });
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