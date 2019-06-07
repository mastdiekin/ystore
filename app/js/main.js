/*----------  Sources  ----------*/
import hello from './lib/hello.js';
import $ from 'jquery';
import preloader from './lib/preloader.js';
import ToggleEmelents from './src/toggle-elements';

/*----------  Libs  ----------*/
import svg4everybody from '../libs/svg4everybody/dist/svg4everybody.legacy.js';
import magnificPopup from '../libs/magnific-popup/dist/jquery.magnific-popup.min.js';
import Swiper from 'Swiper';
import { TimelineMax } from 'gsap';

hello();
preloader();
svg4everybody({
  polyfill: true 
});

// let bullets = document.getElementsByClassName('js__bullet');
// const Bullet  = new Bullets(bullets);


/**
 *
 * Main slider
 *
*/
let mainSliderSelector = '.mainslider';

$(mainSlider).trigger('click');
let mainSliderOptions = {
  loop: true,
  speed: 2000,
  autoplay: true,
  grabCursor: false,
  simulateTouch: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.mainslider__pagination',
    clickable: true
  },
};
var mainSlider;
mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

$('.js__mainslider__slide').each(function(index, el) {
  let img;
  let blur;
  let width;
  let offset;

  if(el.dataset.img) {
    img = 'background-image: url(\''+el.dataset.img+'\');';
  }

  if(el.dataset.blur) {
    blur = 'filter: blur('+el.dataset.blur+'px);';
  }
  if(el.dataset.width) {
    width = 'width: '+el.dataset.width+'%;';
  }
  if(el.dataset.offset) {
    offset = 'bottom: '+el.dataset.offset+'px;';
  }

  $(this).append($('<div class="mainslider__item" style="'+img+'"></div>'));
  $(this).append($('<div class="mainslider__item-blured" style="'+img+blur+width+offset+'"></div>'));

});

$('.bullet').each(function(el) {

  var th = $(this);

  $(this).click(function(e) {

    e.preventDefault();

    var $this = th.parent().find('.bullet__info');

    $('.bullet__info').not($this).fadeOut();

    $('.is--top').not($this).removeClass('is--top');

    $this.parent().toggleClass('is--top');

    $this.fadeToggle(300, 'easeInOutQuad'); //fadeIn()

  });
});

$.extend(jQuery.easing, {

  easeInOutQuad: function(x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  }

});

$('.mostliked__item').each(function(index) {
  var mostliked = new Swiper($(this), {
    loop: true,
    speed: 1000,
    autoplay: false,
    grabCursor: true,
    simulateTouch: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.mostliked__next',
      prevEl: '.mostliked__prev',
    },
  });
});

$('.instagram__slider').each(function(index) {
  var mostliked = new Swiper($(this), {
    loop: true,
    speed: 1000,
    autoplay: true,
    grabCursor: true,
    slidesPerView: 4,
    simulateTouch: false,
    navigation: {
      nextEl: '.instagram__next',
      prevEl: '.instagram__prev',
    },
  });
});

$.fn.dupe = function(a, b) {
  var c = [];
  for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
  return this.pushStack(c);
};

/**
 *
 * Mobile menu
 *
*/
$('.topline__l-menu').dupe(1).appendTo('.mobile__menu');
$('.topline__r-links a').dupe(1).appendTo('.mobile__menu');
let burger = $('.burger');
let mobileMenu = $('.mobile__menu');
let mMenu = new ToggleEmelents(burger, mobileMenu);
burger.click(function(e) {
  e.preventDefault();
  mMenu.toggle();
});


let cart = $('.cart');
let cartWrapper = $('.cart__popup');
let cartBtn = new ToggleEmelents(cart, cartWrapper);
cart.click(function(e) {
  e.preventDefault();
  cartBtn.toggle();
});
