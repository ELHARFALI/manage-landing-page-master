const overlay = document.querySelector('.overlay');
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const img = document.querySelector('.img')
const img2 = document.querySelector(".img2");


    menu.addEventListener("click", function () {
      navbar.classList.toggle("active");
      img.classList.toggle('img-active')
      img2.classList.toggle('img-isactive')
      overlay.classList.toggle('overlay-active')
    });

overlay.addEventListener('click', function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("overlay-active");
      img.classList.toggle("img-active");
      img2.classList.toggle("img-isactive");
    })