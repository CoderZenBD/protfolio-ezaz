var typed = new Typed('.ezaz', {
  // Waits 1000ms after typing "First"
  strings: ['Study',
    'Logo designer',
    'Batminton',
    'Drone fly'],
  typeSpeed: 60,
  startDelay: 60,
  loop: true,
});
//initiating jQuery
jQuery(function ($) {
  $(document).ready(function () {

    $('.happy-fun').animationCounter({
      start: 0,
      end: 1550,
      txt: '+',
      step: 6,
      delay: 40,
    });

    $('.happy-line').animationCounter({
      start: 0,
      end: 74589,
      step: 220,
      delay: 30,
    });

    $('.happy-coffee').animationCounter({
      start: 0,
      end: 780,
      txt: '+',
      step: 3,
      delay: 50,
    });

    $('.happy-star').animationCounter({
      start: 0,
      end: 250,
      txt: '+',
      step: 1,
      delay: 50,
    });
  });
});
// progress bar start
$('.frist-progressbar').rProgressbar({
  percentage: 95,
  fillBackgroundColor: '#fe7e11',
  borderRadius: '5px',
});

$('.second-progressbar').rProgressbar({
  percentage: 84,
  fillBackgroundColor: '#f5073f',
  borderRadius: '5px',
});

$('.third-progressbar').rProgressbar({
  percentage: 80,
  fillBackgroundColor: '#6607f5',
  borderRadius: '5px',
});

$('.forth-progressbar').rProgressbar({
  percentage: 74,
  fillBackgroundColor: '#07aef5',
  borderRadius: '5px',
});
// progressbar end

// swepper here
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// mixit up 
$(document).ready(function(){
  var mixer = mixitup('.mix-box');
});
// header menu change color
var header = document.getElementById("myNav");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
};
// pre loader
setTimeout(function(){
  $('.loader_bg').fadeToggle();
  $('body').removeClass('no-scroll-y');
}, 2000);
