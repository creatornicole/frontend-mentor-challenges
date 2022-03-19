/*=========================================================================
Script for Frontend-Mentor Challenge Intro Component with Sign Up Form 03/22

file: script.js
date: 19.03.2022
author: Nicole Gottschall

This script includes hover states for all interactive elements and
==========================================================================*/





/*=========================================================================
preparation
==========================================================================*/
/* get needed elements */
let btn = document.querySelector('.submit');

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
