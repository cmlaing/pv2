/*==================================================================
    
    app.js
    1. Includes JS plugin for sliding content on screen, taken 
    from: https://github.com/mciastek/sal
    Execute in this file by running: sal();
    and including sal.js, sal.css
    2. Bootstrap Carousel feature
    https://getbootstrap.com/docs/5.0/components/carousel/

==================================================================*/


/* slide animation for each section */
sal({
    threshold: 0.3, /*makes the first 2 slides happen when the screen loads */
  });

sal();

/* Carousel for Project cards*/

var project1carousel = document.querySelector('#project1')
var carousel = new bootstrap.Carousel(project1carousel)


/* jumbotron stuff */

$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});
