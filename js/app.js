/*==================================================================
    
    app.js
    1. Includes JS plugin for sliding content on screen, taken 
    from: https://github.com/mciastek/sal
    Execute in this file by running: sal();
    and including sal.js, sal.css
    2. Bootstrap Carousel feature
    https://getbootstrap.com/docs/5.0/components/carousel/
    3. Header/navbar change background and font color for different sections

==================================================================*/


/* 1. slide animation for each section */
sal({
    threshold: 0.3, /*makes the first 2 slides happen when the screen loads */
  });

sal();

/* 2. Carousel for Project cards*/

var project1carousel = document.querySelector('#project1')
var carousel = new bootstrap.Carousel(project1carousel)




/* 3. Change text color of navbar when on dark background */

/* get height of hero section as starting point for scroll change */
let box = document.querySelector('.jumbotron');
let height_jumbotron = box.clientHeight;

/* get height of About Me section as starting point for scroll change */
let box2 = document.querySelector('.aboutme');
let height_aboutme = box2.clientHeight + box.clientHeight;


var navbar = document.querySelector('header');

/* When scrolling, add scrolled class */
window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > height_jumbotron) {
    navbar.classList.add('scrolled')
    if (window.pageYOffset > height_aboutme) {
      navbar.classList.remove('scrolled')
    }
  } else {
    navbar.classList.remove('scrolled')
  }
}
