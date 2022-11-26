var menu = document.querySelector("#mobile-menu");
var nav = document.querySelector(".navbar-menu");

menu.addEventListener('click', function () {
    menu.classList.toggle("is-active");
    nav.classList.toggle("active");
})