# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). With Frontend Mentor challenges I want to improve my Frontend-Skills and have fun building realistic projects.

## Overview

This challenge is about building out this order summary card component and get it looking as close to the following design as possible.

![](design/desktop-preview.jpg)

## Learnings

- values of border-radius
```css
div {
  border-radius: 20px 15px 10px 5px;
                /*top-left
                      top-right
                            bottom-left
                                bottom-right*/
}
```
- define length of flexible items by adding flex property
- values of box-shadow
```css
div {
  box-shadow: 2px 10px 30px #7e57c2;
            /*vertical shadow
                  horizontal shadow
                       blur
                            color */
}
```
- create background with SVG as background-image
- adjustments for different screen sizes with @media
```css
@media all and (max-width: 1439px) {
  /* add different design for this screen size here */
}
```
