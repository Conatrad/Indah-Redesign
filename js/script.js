let header = document.querySelector("#header");
let phrase = document.querySelector(".phrase");
let sticky = phrase.offsetTop;
let logo = document.querySelector(".logo");

//Pins header to top of page when scrolling past home screen
window.onscroll = () => window.pageYOffset > sticky ? header.classList.add("sticky") : header.classList.remove("sticky");

logo.addEventListener("click", window.scroll(0, 0));