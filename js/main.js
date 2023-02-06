$(document).ready(function () {

  new Swiper(".main > .gallery > .swiper-container > .swiper", {
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    effect: "fade",
    speed: 600,
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".main > .gallery + div > div:last-child > div > .swiper-pagination",
      clickable: true
    }
  });

  new Swiper(".section.uto > .center > .swiper-container > .swiper", {
    slidesPerView: 1,
    spaceBetween: 8,
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 24
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    }
  });

  return false;
});
