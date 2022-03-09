/*=========================================================================
Script for Frontend-Mentor Challenge Article-Preview-Component 03/22

file: script.js
date: 09.03.2022
author: Nicole Gottschall

Creates hover-effect for share-icon.
Moreover enables to display the social media links when share-icon is clicked.
How it is displayed depends on screen size - this has been taken into account.
 (listens to screen size changes)
==========================================================================*/





/*========================================================================
preparation
========================================================================*/

// get needed elements
shareIcon = document.querySelector('.share-icon');
authorBlock = document.querySelector('.author-block');
author = document.querySelector('.author');
shareBlock = document.querySelector('.share-block');

//social media links invisible at beginning
shareBlock.style.display = "none";

//check if share icon is clicked
clicked = false;

// get screen size and listen to screen size changes
screenSize = window.innerWidth;
window.addEventListener("resize", function() {
  screenSize = window.innerWidth;
  if(shareBlock.style.display != "none") {
    adjustShareBlock();
  }
});


/*========================================================================
click event
========================================================================*/

shareIcon.addEventListener("click", function() {
  if(screenSize >= 1440) {
    if(shareBlock.style.display == "none") {
      clicked = true;
      shareBlock.style.display = "inherit";
      shareBlock.innerHTML += `<div class="rec"></div>
        <p class="share-links">Share <img src="images/icon-facebook.svg" class="img-align share-icons">
        <img src="images/icon-twitter.svg" class="img-align share-icons">
        <img src="images/icon-pinterest.svg" class="img-align share-icons"></p>`;
    } else {
      clicked = false;
      shareBlock.style.display = "none";
      shareBlock.innerHTML = "";
    }
  } else {
    if(shareBlock.style.display == "none") {
      clicked = true;
      author.style.display = "none";
      shareBlock.style.display = "inherit";
      shareBlock.innerHTML += `<p>Share
        <img src="images/icon-facebook.svg" class="img-align share-icons">
        <img src="images/icon-twitter.svg" class="img-align share-icons">
        <img src="images/icon-pinterest.svg" class="img-align share-icons"></p>`;
      authorBlock.style.backgroundColor = "var(--very-dark-grayish-blue)";
      changeIconDesign();
    } else {
      clicked = false;
      author.style.display = "inherit";
      shareBlock.style.display = "none";
      shareBlock.innerHTML = "";
      authorBlock.style.backgroundColor = "inherit";
    }
  }
});

/*========================================================================
Adjust Appearance depending on screen size
========================================================================*/
function adjustShareBlock() {
  if(screenSize >= 1440) {
    author.style.display = "inherit";
    authorBlock.style.backgroundColor = "inherit";
    shareBlock.innerHTML = "";
    shareBlock.innerHTML += `<div class="rec"></div>
      <p class="share-links">Share <img src="images/icon-facebook.svg" class="img-align share-icons">
      <img src="images/icon-twitter.svg" class="img-align share-icons">
      <img src="images/icon-pinterest.svg" class="img-align share-icons"></p>`;
  } else {
    author.style.display = "none";
    authorBlock.style.backgroundColor = "var(--very-dark-grayish-blue)";
  }
}

/*========================================================================
Icon hover-effect
========================================================================*/

shareIcon.addEventListener("mouseover", function() {
  shareIcon.style.cursor = "pointer";
  changeIconDesign();
});

shareIcon.addEventListener("mouseout", function() {
    shareIcon.style.cursor = "default";
    if(clicked == false) {
      changeIconDesignToDefault();
    }
});

/*========================================================================
Icon Color Change
========================================================================*/

function changeIconDesign() {
    shareIcon.style.fill = "#FFFFFF";
    shareIcon.style.backgroundColor = "var(--desaturated-dark-blue)";
}

function changeIconDesignToDefault() {
    shareIcon.style.fill = "#6E8098";
    shareIcon.style.backgroundColor = "var(--light-grayish-blue)";
}
