// 4 ways to select the first <p> tag
var tag = document.querySelector("#first");
var tag = document.querySelector(".special");
var tag = document.querySelector("p");
// var tag = document.querySelectorAll("p");
document.getElementById("first");
document.getElementByClassName("special")[0];
document.getElementByTagName("p")[0];
