var links = document.getElementById("links");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");

function openav() {
  document.body.classList.toggle("locked");
  links.classList.toggle("show");
  first.classList.toggle("one");
  second.classList.toggle("two");
  third.classList.toggle("three");
}


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});