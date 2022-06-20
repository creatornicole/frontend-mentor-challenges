/*=========================================================================
Script for Frontend-Mentor Challenge Intro Component with Sign Up Form 03/22

file: script.js
date: 19.03.2022
author: Nicole Gottschall

This script includes hover states for all interactive elements and form validation.
==========================================================================*/





/*=========================================================================
preparation
==========================================================================*/
/* get needed elements */
let btn = document.querySelector('.submit');
/* get input fields */
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let email = document.querySelector('.email');
let password = document.querySelector('.password');

/* regex for input value  validation */
let regex = /^[A-Za-z0-9]/;

/*=========================================================================
hover states
==========================================================================*/
btn.addEventListener("mouseover", function() {
  btn.style.cursor = "pointer";
  btn.style.opacity = ".6";
});

btn.addEventListener("mouseout", function() {
  btn.style = "initial";
});

/*=========================================================================
form validation
==========================================================================*/
btn.addEventListener("click", function() {
  /* check if (one) input is empty */
  if(!regex.test(fname.value)) {
    alert("fname empty");
  } else if(!regex.test(lname.value)) {
    alert("lname empty");
  } else if(!regex.test(email.value)) {
    alert("email empty");
  } else if(password.value == "" {
    alert("password empty");
  }
});
