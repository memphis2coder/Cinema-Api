//selecting elements from the DOM
const searchInput = document.querySelector("#inputValue");
const searchBtn = document.querySelector("#search");

const test = document.querySelector(".title");

searchBtn.onclick = function(e) {
  //prevent page reload when I click submit button
  e.preventDefault();
  document.querySelector(".title").innerHTML = "New text!";
  console.log("button has been clicked");
};
