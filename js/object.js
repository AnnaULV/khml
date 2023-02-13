$(document).ready(function () {
  "use strict";

  if ($(".gallery > .swiper-container > .swiper > .swiper-wrapper > .swiper-slide").length > 0) {
    new Swiper(".gallery > .swiper-container > .swiper", {
      slidesPerView: 1,
      pagination: {
        el: "article > .swiper-pagination",
        clickable: true
      }
    });
  }

  return false;
});