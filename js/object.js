$(document).ready(function () {
  "use strict";

  if ($("article > .gallery.swiper-container > .swiper > .swiper-wrapper > .swiper-slide").length > 0) {
    new Swiper("article > .gallery.swiper-container > .swiper", {
      slidesPerView: 1,
      pagination: {
        el: "article > .gallery.swiper-container + .swiper-pagination",
        clickable: true
      }
    });
  }

  return false;
});
