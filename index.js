window.onscroll = function() {scrollFunction()};
var header = document.getElementById("header");
var content = document.getElementsByClassName("content");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.style.top = "0";
    header.style.transitionDuration = "1s";
  } else {
    header.style.top = "-72px";
    }
}


function validation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var errorMessage = document.getElementById("error-message");
  var text;

  errorMessage.style.padding = "10px";

  if(name.length <5) {
    text = "Please enter a Valid Name";
    errorMessage.innerHTML = text;
    return false;
  }

  if(email.indexOf("@") == -1 || email.length < 6) {
    text = "Please enter a Valid E-mail address";
    errorMessage.innerHTML = text;
    return false;
  }

  if(isNaN(phone) || phone.length != 10) {
    text = "Please enter a Valid Phone No";
    errorMessage.innerHTML = text;
    return false;
  }

  if(message.length <=50) {
    text = "Please enter a min of 50 charachters";
    errorMessage.innerHTML = text;
    return false;
  }

  alert("Success! Your form has been submitted.")

  return true;
}
