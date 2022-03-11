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
btn = document.querySelector('.submit');


/*=========================================================================
hover event
==========================================================================*/
btn.addEventListener("mouseover", function() {
  btn.style.cssText = `
    cursor: pointer;
    background: url(images/icon-arrow.svg), var(--desaturated-red);
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 2px 12px 25px var(--desaturated-red);
  `;
});

btn.addEventListener("mouseout", function() {
  btn.style = "inherit";
});

/*=========================================================================
error message (error occurs when user submits form with false input fields)
==========================================================================*/
