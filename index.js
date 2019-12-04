// var contact = document.getElementById('header-contact');
// var contact2 = document.getElementById('contact');
// function scroll1() {
//     contact.addEventListener('click', window.location.href = contact2);
// }

// scroll1();

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}