


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