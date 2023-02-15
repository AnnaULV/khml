$(document).ready(function () {
    "use strict";

    if ($(".gallery.photoline > .swiper-container > .swiper > .swiper-wrapper > .swiper-slide").length > 0) {
        new Swiper(".gallery.photoline > .swiper-container > .swiper", {
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
    }

    return false;
});
