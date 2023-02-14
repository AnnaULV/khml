$(document).ready(function () {
    "use strict";

    if ($(".gallery > .swiper-container > .swiper > .swiper-wrapper > .swiper-slide").length > 0) {
        new Swiper(".gallery > .swiper-container > .swiper", {
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
            pagination: {
                el: "article > .section > .center > .swiper-pagination",
                clickable: true
            }
        });
    }

    return false;
});
