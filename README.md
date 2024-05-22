# Frontend Mentor - Art gallery website solution

This is a solution to the [Art gallery website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/art-gallery-website-yVdrZlxyA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Art gallery website solution](#frontend-mentor---art-gallery-website-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- **Bonus**: Use [Leaflet JS](https://leafletjs.com/) to create an interactive location map with custom location pin

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

So far, I have building single paged websites. This challenge presented the opportunity to build a two paged website.A two paged website involves using more than one html file, interlinking each other. The website is divided into a home page and a location page holding a map and address. There are a plethora of reasons why it is good pratcice to use different pages. Chief amongst is that by distirbuting content accross multiple pages, each page can load faster.

it additioanlly makes the website more organized, and improves user experieince. 

The website has two buttons, one each page that directs to the other page. The location button on the home page that directs to the location page and the back button on the location page navigates back to the home page.

I linked the pages using `window.location.href`. The `window.location.href` property enables the manipulation of the a website's URL. I added an event listener to each button, so that when the buttons are clicked the user is taken to the approriate page. Below is a code snippet showing that:

````js 
const go_to_location_page_btn = document.querySelector('.go-to-location-page-btn');

    go_to_location_page_btn.addEventListener('click', function () {
      window.location.href = 'location.html';
    })

const backHomeBtn = document.querySelector('.back-to-home-btn');

    backHomeBtn.addEventListener('click', function () {
      window.location.href = 'index.html';
    })
````

The code snippet above now enables users to switch smoothly between the two pages.

Instead of using the image of the map provided,  I thought it would be more challenging to use the `Leaflet Js` library that dynamically displays the map. 



Leafle is an open source library for creating inteacive maps. It is designed to be simple, lightweight and efficient. 

The first step to integrating Leaflet into your webpage,is creating an empty container with an id of map as follows:

````html
 <div id="map">
      
  </div>
````
Using Javascript you iniate the map with `L.map('map')`  as follows: 

```` js
var map = L.map('map').setView([41.48224, -71.31111], 13);

````
The 'map' here refers to the div element I created in the html.  `setview` like the name suggest enables you to set the view. The digits in the square bracket represent represent the longitude and latitude of the specific adress i want the map to focus on. The last digit is the zoom level. 

Then I deploy the map's base image with a tileLayer, and because the overall theme of the webpage is dark, I used a dark tilelayer so the map blends in. 

````js

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

````
To make the map easier to read, a maker is needed that pinpoints the exact location of the address being spicified. `L.marker` is the property used to enable a marker. As its parameter it takes the longtitte ad lattude of the location. 

````js
var kingStreetMarker = L.marker([41.48224, -71.31111]).addTo(map);
kingStreetMarker.bindPopup('King Street, Newport').openPopup();
````
To make the pinpoint more accessible, a popup is added so that when a user clicks the marker the extact location is displayed as a popup.


### Continued development

I look forward to using and working with more open source javascript libraries.



## Acknowledgments

Thank You to the Frontend Team for this awesome challenge.
