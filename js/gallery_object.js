/* начальное значение переменной */
/*var object = null;

$(document).ready(function () {

if ($(".gallery.object > .swiper-container > .swiper > .swiper-wrapper > .swiper-slide").length > 1) {
/* инициализация фотогалереи */
  /*object = new Swiper(".gallery.object > .swiper-container > .swiper", {

    /* кол-во слайдов в блоке фотогалереи «по умолчанию» */
   /* slidesPerView: 1,
    /* отступ справа (margin) «по умолчанию» */
   /* spaceBetween: 0,
      pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });    
}   else {
    $(".swiper-pagination").css({
        "display" : "none"
    });
}

  return false;
}); */


$(document).ready(function () {

new Swiper(".main > .gallery.object > .swiper-container > .swiper", {
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    effect: "fade",
    speed: 600,
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".main > .gallery.object + div > div:last-child > div > .swiper-pagination",
      clickable: true
    }
  });
    
  return false;
}); 
