(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });

  // owl-carousel
  $('.product-slider-active').owlCarousel({
    loop:false,
    margin:35,
    items:4,
    stagePadding: 190,
    responsiveClass:true,
    nav:true,
    dots:true,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive:{
        0:{
          
        },
        575:{
          
        },
        767:{
          
        },
        991:{
          
        },
        1199:{
          
        },
        1599:{
          
      }
    }
  });

  $('.showcase__slider-active').owlCarousel({
    loop:false,
    margin:35,
    items:1,
    stagePadding: 190,
    responsiveClass:true,
    nav:true,
    dots:true,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive:{
        0:{
          stagePadding: 20,
          margin:20
        },
        575:{
          stagePadding: 100,
          margin:20
        },
        767:{
          stagePadding: 200,
          margin:20
        },
        991:{
          stagePadding: 150,
          margin:20
        },
        1199:{
          stagePadding: 180,
          margin:20
        },
        1599:{
          stagePadding: 190,
      }
    }
  });


  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

})(jQuery);




$(document).ready(function(){


  // preloader
  $("#preloader").fadeOut(500);

})











