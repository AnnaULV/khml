$(document).ready(function () {
    "use strict";

    new Swiper(".main > .gallery.swiper-container > .swiper", {
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
            481: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            961: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            1201: {
                slidesPerView: 3,
                spaceBetween: 32
            }
        }
    });

    new Swiper(".section.news > .center > .swiper-container > .swiper", {
        slidesPerView: 1,
        spaceBetween: 8,
        breakpoints: {
            481: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            961: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            1201: {
                slidesPerView: 3,
                spaceBetween: 32
            }
        },
        navigation: {
            nextEl: ".section.news > .center > .swiper-container > .swiper-button.next",
            prevEl: ".section.news > .center > .swiper-container > .swiper-button.prev"
        }
    });

    new Swiper(".section.special > .center > .swiper-container > .swiper", {
        slidesPerView: 1,
        spaceBetween: 8,
         breakpoints: {
            481: {
                spaceBetween: 16
            },
            961: {
                spaceBetween: 24
            },
            1201: {
                spaceBetween: 32
            }
         },
        navigation: {
            nextEl: ".section.special > .center > .swiper-container > .swiper-button.next",
            prevEl: ".section.special > .center > .swiper-container > .swiper-button.prev"
        }
    });

    return false;
});
