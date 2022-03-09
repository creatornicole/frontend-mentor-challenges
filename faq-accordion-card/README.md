# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). With Frontend Mentor challenges I want to improve my Frontend-Skills and have fun by building realistic projects.

## Overview

This challenge is about building out this FAQ accordion card and get it looking as close to the following design as possible.

The users should be able to:
- view optimal layout for component depending on their device's screen size
- see hover states for all interactive elements
- hide/ show answer to a question when the question is clicked

![](design/desktop-design.jpg)

## Learnings

- linear-gradient(direction, color1, color2, ...) as background-color
```css
body {
  background-image: linear-gradient(violet, pink);
  height: 100vh; /* to cover */
}
```

- box-shadow makes element stand out

- detect which button was clicked with JavaScript
  - unique id for elements
  - get id of clicked element and element itself
  - get all elements by class name
  ```js
  document.querySelectorAll('.className');
  ```
  - loop through each element with for each and add EventListener

- display: none has to be assigned in JS not in CSS, otherwise first onclick-event won't work
