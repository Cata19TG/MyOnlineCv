window.onscroll = function() {scrollFunction()};
var header = document.getElementById("header");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.style.top = "0";
    header.style.transitionDuration = "0.7s";
  } else {
    header.style.top = "-72px";
    }

    // if (document.body.scrollTo = true) {
    //     header.style.top = "-72px";
    // }
}

