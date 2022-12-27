
(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function () {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function () {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function () {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });

  // owl-carousel
  $('.product-slider-active').owlCarousel({
    loop: false,
    margin: 35,
    items: 2,
    stagePadding: 190,
    responsiveClass: true,
    nav: true,
    dots: true,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive: {
      0: {
        items: 1,
        stagePadding: 13,
        margin: 12,
      },
      370: {
        items: 1,
        stagePadding: 30,
        margin: 12,
      },
      575: {
        items: 1,
        stagePadding: 100,
        margin: 20,
      },
      767: {
        items: 2,
        stagePadding: 0,
        margin: 15,
      },
      991: {
        items:2,
        margin: 20,
        stagePadding: 100,
      },
      1199: {

      },
      1599: {

      }
    }
  });





  // owl-carousel Category Mobile

  $('.category__main__slider').owlCarousel({
    loop: false,
    margin: 15,
    items: 1,
    stagePadding: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    responsive: {
      0: {

      },
      575: {

      },
      767: {

      },
      991: {

      },
      1199: {

      },
      1599: {

      }
    }
  });





  // owl-carousel Product Mobile

  $('.product-list-wrap2').owlCarousel({
    loop: false,
    margin: 15,
    items: 1,
    stagePadding: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 13,
        margin: 12,
      },
      370: {
        items: 1,
        stagePadding: 30,
        margin: 12,
      },
      575: {
        items: 1,
        stagePadding: 100,
        margin: 20,
      },
      767: {
        items: 2,
        stagePadding: 0,
        margin: 15,
      },
      991: {
        items:2,
        margin: 20,
        stagePadding: 100,
      },
      1199: {

      },
      1599: {

      }
    }
  });







  $('.showcase__slider-active').owlCarousel({
    loop: false,
    margin: 35,
    items: 1,
    stagePadding: 190,
    responsiveClass: true,
    nav: true,
    lazyLoad:true,
    dots: true,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive: {
      0: {
        stagePadding: 20,
        margin: 20
      },
      575: {
        stagePadding: 100,
        margin: 20
      },
      767: {
        stagePadding: 200,
        margin: 20
      },
      991: {
        stagePadding: 150,
        margin: 20
      },
      1199: {
        stagePadding: 180,
        margin: 20
      },
      1599: {
        stagePadding: 190,
      }
    }
  });


  $('.category-wrap-slider').owlCarousel({
    loop: false,
    margin:25,
    items: 3,
    stagePadding: 190,
    responsiveClass: true,
    nav: false,
    dots: false,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive: {
      0: {
        stagePadding: 80,
        margin: 12,
        items: 1
      },
      575: {
        stagePadding: 100,
        margin: 15,
        items:1
      },
      767: {
        stagePadding: 100,
        margin: 17,
        items:2
      },
      991: {
        stagePadding: 80,
        margin: 17,
      },
      1199: {
        stagePadding: 120,
        margin: 17
      },
      1599: {
        stagePadding: 170,
      }
    }
  });


  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

})(jQuery);




$(document).ready(function () {

  $('.hero__search .input')[0].addEventListener("focus", function(){
    $('.hero__search').addClass('search-focused')
  });
  $('.hero__search .input')[0].addEventListener("blur", function(){
    $('.hero__search').removeClass('search-focused')
  });

  // preloader
  $("#preloader").fadeOut(500);

})