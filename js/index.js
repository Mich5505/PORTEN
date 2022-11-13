


console.log("Ok")
const ge = s => document.querySelector(s);
const burger = ge('.burger');
const nav_menu = ge('.nav-menu');
burger.addEventListener('click', function() {
  nav_menu.classList.toggle('show_flex')
});
nav_menu.addEventListener('click', function(){
  console.log(event.target)
})

// Slider

console.log(window.innerWidth);
if (window.innerWidth <= 900) {

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
  });
}

console.log("ok");