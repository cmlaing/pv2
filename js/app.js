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
let jumbo = document.querySelector('.jumbotron');
let height_jumbotron = jumbo.clientHeight;

/* get height of About Me section as starting point for scroll change */
let aboutme = document.querySelector('.aboutme');
let height_aboutme = aboutme.clientHeight + jumbo.clientHeight;


var navbar = document.querySelector('header');

/* When scrolling, add scrolled class */
window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > height_jumbotron) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

/* when using nav menu and clicked directly to #projects or beyond, add scrolled class */

/* TODO: does it work?
make function to add scroll class then add onclick to specific links to link to function?

*/

function add_scrolled(){
  navbar.classList.add('scrolled')
}
 
navbar.on('click', function(event) {
  event.preventDefault();
  navbar.classList.add('scrolled')
  
});

