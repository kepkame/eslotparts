'use strict';

/**
 * If JavaScript works then remove class .no-js
 */
var removeStylesNoJs = function() {
  var stylesNoJs = document.querySelectorAll('.no-js');
  for (var i = 0; i < stylesNoJs.length; i++) {
    stylesNoJs[i].classList.remove('no-js');
  }
};

if(document.querySelector('.no-js')) {
  removeStylesNoJs();
}

/**
 * Update cart
 */
function removeDisabled() {
  var buttonsMinus = document.querySelectorAll('input.minus');
  var buttonsPlus = document.querySelectorAll('input.plus');

  function clickRemoveDisabled() {
    var btnUpdate = document.querySelector('.actions > button.button');
    btnUpdate.removeAttribute('disabled');
    btnUpdate.setAttribute('aria-disabled', 'false');
  }

  Array.prototype.forEach.call(buttonsMinus, function(item){
    item.addEventListener('click', function() {
      clickRemoveDisabled();
    });
  });

  Array.prototype.forEach.call(buttonsPlus, function(item){
    item.addEventListener('click', function() {
      clickRemoveDisabled();
    });
  });
}

if (document.querySelector('.woocommerce-cart')) {
  removeDisabled();
}

/**
 * jQUery
 */
jQuery(document).ready(function($){

  /**
   * Slick slider
   */
  $('.slider-single').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst:true
  });

  $('.small-slider').slick({
    arrows: true,
    infinite: false,
    dots: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow:
      '<span class="slider-arrow slider-arrow--next"><button class="slider-arrow__btn" aria-label="Next" tabindex="0" role="button"><svg class="slider-arrow__icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.46824 9.33321L11.8083 3.99306C11.9319 3.86955 12 3.70467 12 3.52887C12 3.35307 11.9319 3.18819 11.8083 3.06468L11.4151 2.67141C11.1589 2.41551 10.7425 2.41551 10.4867 2.67141L6.00249 7.15567L1.51326 2.66644C1.38965 2.54293 1.22487 2.47473 1.04916 2.47473C0.873261 2.47473 0.708483 2.54293 0.584776 2.66644L0.191707 3.0597C0.0680981 3.18331 9.53674e-07 3.34809 9.53674e-07 3.52389C9.53674e-07 3.6997 0.0680981 3.86457 0.191707 3.98808L5.53664 9.33321C5.66064 9.45702 5.8262 9.52501 6.0022 9.52462C6.17888 9.52501 6.34434 9.45702 6.46824 9.33321Z" fill="#F3F3F3"></path></svg></button></span>',
    prevArrow:
      '<span class="slider-arrow slider-arrow--prew"><button class="slider-arrow__btn" aria-label="Previous" tabindex="0" role="button"><svg class="slider-arrow__icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.46824 9.33321L11.8083 3.99306C11.9319 3.86955 12 3.70467 12 3.52887C12 3.35307 11.9319 3.18819 11.8083 3.06468L11.4151 2.67141C11.1589 2.41551 10.7425 2.41551 10.4867 2.67141L6.00249 7.15567L1.51326 2.66644C1.38965 2.54293 1.22487 2.47473 1.04916 2.47473C0.873261 2.47473 0.708483 2.54293 0.584776 2.66644L0.191707 3.0597C0.0680981 3.18331 9.53674e-07 3.34809 9.53674e-07 3.52389C9.53674e-07 3.6997 0.0680981 3.86457 0.191707 3.98808L5.53664 9.33321C5.66064 9.45702 5.8262 9.52501 6.0022 9.52462C6.17888 9.52501 6.34434 9.45702 6.46824 9.33321Z" fill="#F3F3F3"></path></svg></button></span>',
    responsive: [
      {
        breakpoint: 409,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 849,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
    ],
    mobileFirst:true
  });

  /**
   * Fancybox
   */
  $('[data-fancybox="our-machines"]').fancybox({
    loop: false,
    autoFocus: false,
    buttons: [
      "zoom",
      "close"
    ],
    thumbs : {
      showOnStart : true
    },
    hash : true,
  });

  /**
   * WooCommerce - Opening account navigation on hover
   */
  $('#mini-account').hover(function () {
    $('#mini-account .header-controls__woocommerce-nav').addClass('header-controls__woocommerce-nav--open');
  }, function () {
    $('#mini-account').data('timer', setTimeout(function () {
      $('#mini-account .header-controls__woocommerce-nav').removeClass('header-controls__woocommerce-nav--open');
    }, 200));
  });

  /**
   * WooCommerce - Opening cart on hover
   */
  $('#mini-cart').hover(function () {
    $('#mini-cart .widget_shopping_cart').addClass('widget_shopping_cart-open');
  }, function () {
    $('#mini-cart').data('timer', setTimeout(function () {
      $('#mini-cart .widget_shopping_cart').removeClass('widget_shopping_cart-open');
    }, 200));
  });

  /**
   * Show button top
   */
   if(document.querySelector('#btnTop'))
   jQuery(window).scroll(function(){
     if(jQuery(this).scrollTop()>860){
       jQuery('#btnTop').addClass('btn-top--show');
     }
     else if ($(this).scrollTop()<860 && $('#btnTop').hasClass('btn-top--show')){
       jQuery('#btnTop').addClass('btn-top--hide');
       setTimeout(function() {
         jQuery('#btnTop').removeClass('btn-top--show');
         jQuery('#btnTop').removeClass('btn-top--hide');
       }, 650);
     }
   });

  /**
   * Href animate
   */
   $("a[href^='#']").click(function() {
    if($(this).attr('href') != "#") {
      var e = $(this).attr("href");
      return $("html, body").animate({
          scrollTop: $(e).offset().top + "px"
      }, 550),
      !1;
    }
  });

});
/**
 * jQuery/
 */



