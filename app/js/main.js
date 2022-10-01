const overlay = document.querySelector('.overlay');
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

if (menu) {
    menu.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
} else {
    console.log('error');
}
