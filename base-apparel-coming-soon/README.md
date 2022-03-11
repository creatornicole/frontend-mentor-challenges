# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). With Frontend Mentor challenges I want to improve my Frontend-Skills and have fun by building realistic projects.

## Overview

This challenge is about building out this coming soon page and get it looking as close to the following design as possible.

The user should be able to...:
- view the optimal layout for the site depending on their device's screen size
- see hover states for all interactive elements on the page
- receive an error message when the form is submitted, but the input field is empty or email address is not formatted correctly

Desktop in active state
![](design/active-states.jpg)

Mobile Version \
![](design/mobile-design.jpg)

## Learnings

- use grid layout for two dimensional positioning - grid-template-areas:
 ```css
.grid-container {
  display: grid;
  grid-template-columns: 55% 45%;
  grid-template-rows: 180px auto;
  grid-template-areas:
    "item1 item2"
    "item3 item2";
}

.item1 {
  grid-area; item1;
}

.item2 {
  grid-area: item2;
}

.item3 {
  grid-area: item3;
}
```

- if you want to use form on your webpage make sure to include *form validation*
