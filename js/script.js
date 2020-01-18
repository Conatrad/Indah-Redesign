let header = document.querySelector("#header");
let sticky = header.offsetTop;
let logo = document.querySelector(".logo");

window.onscroll = () => window.pageYOffset > sticky ? header.classList.add("sticky") : header.classList.remove("sticky");

logo.addEventListener("click", window.scroll(0, 0));