$(document).ready(function () {
    "use strict";

    if ($(".chips > .swiper-container > .swiper > .swiper-wrapper").length > 0) {
        new Swiper(".chips > .swiper-container > .swiper", {
            slidesPerView: "auto",
            spaceBetween: 16,
            freeMode: true,
            observer: true,
            observeSlideChildren: true
        });
    }

    return false;
});
