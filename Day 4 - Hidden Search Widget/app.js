let searchButton = document.querySelector("#search-button");
let searchBar = document.querySelector("#search-bar");

searchButton.addEventListener('click', function() {
   searchBar.classList.add("show-search");
   searchBar.classList.remove("hide-search");
   searchBar.focus();
});