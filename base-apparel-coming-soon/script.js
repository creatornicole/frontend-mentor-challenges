/*=========================================================================
Script for Frontend-Mentor Challenge Base Apparel Coming Soon 03/22

file: script.js
date: 11.03.2022
author: Nicole Gottschall

This script includes hover states for all interactive elements of the page.
Furthermore it enables the user to receive a error message when the form is
submitted, but the input field is empty or email address is not formatted
correctly.
==========================================================================*/





/*=========================================================================
preparation
==========================================================================*/
/* get needed elements */
let btn = document.querySelector('.submit');
let form = document.querySelector('.form');
let inputEmail = document.querySelector('input.email');
let email = document.querySelector('input.email').value;
let err = document.querySelector('.err-message');

let emailPattern = /^[a-zA-Z0-9_.]+@[A-Za-z0-9]+\.[a-z]{2,10}$/;
let regexEmpty = /^[A-Za-z0-9]/;

/* check if button is clicked */
let clicked = false;

/*=========================================================================
hover event
==========================================================================*/
btn.addEventListener("mouseover", function() {
  if(clicked) {
    btn.style.cursor = "pointer";
    btn.style.background = "url(images/icon-arrow.svg), var(--desaturated-red)";
    btn.style.backgroundRepeat = "no-repeat";
    btn.style.backgroundPosition = "center";
  } else {
    btn.style.cursor = "pointer";
    btn.style.background = "url(images/icon-arrow.svg), var(--desaturated-red)";
    btn.style.backgroundRepeat = "no-repeat";
    btn.style.backgroundPosition = "center";
    btn.style.boxShadow = "2px 12px 25px var(--desaturated-red)";
  }
});

btn.addEventListener("mouseout", function() {
  btn.style = "inherit";

  if(clicked) {
    btn.style.padding = "15px 0";
    btn.style.top = "-46px";
  }
});

/*=========================================================================
form validation
==========================================================================*/
btn.addEventListener("click", function() {
  clicked = true;
  email = document.querySelector('input.email').value;

  if(!regexEmpty.test(email)) {
    changeInputToInvalidDesign();
    err.innerHTML = "Please enter your email";
  } else if(!emailPattern.test(email)) {
    changeInputToInvalidDesign();
    err.innerHTML = "Please provide a valid email";
  } else {
    btn.setAttribute("type", "submit");
  }
});

function changeInputToInvalidDesign() {
  inputEmail.style.opacity = "1";
  inputEmail.style.background = "url('images/icon-error.svg') no-repeat 78%";
  inputEmail.style.border = "2px solid var(--soft-red)";

  btn.style.padding = "15px 0";
  btn.style.top = "-46px";
}
