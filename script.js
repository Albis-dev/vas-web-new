// NAVBAR
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {	

        // Get the target from the "data-target" attribute
        burgerMenu = document.querySelector('.navbar-menu');

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        burgerMenu.classList.toggle('is-active');
      });
    });
  }
});

// MOBILE NAVBAR BURGER
const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if (vw<=1024) {
	document.getElementById("hide-on-mobile1").remove();
	document.getElementById("hide-on-mobile2").remove();
	document.getElementById("hide-on-mobile3").remove();
	document.getElementById("hide-on-mobile4").remove();
}

window.onload = function() {
	scrolly();
}; 

var btn0 = document.querySelector("#popmodal0")
var mdl0 = new BulmaModal("#modal0")

var btn1 = document.querySelector("#popmodal1")
var mdl1 = new BulmaModal("#modal1")

var btn2 = document.querySelector("#popmodal2")
var mdl2 = new BulmaModal("#modal2")

btn0.addEventListener("click", function () {
	mdl0.show()
})

btn1.addEventListener("click", function () {
	mdl1.show()
})

btn2.addEventListener("click", function () {
	mdl2.show()
})