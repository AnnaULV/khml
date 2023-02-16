var swiper_slide_length = $(".center > .gallery.swiper-container > .swiper > .swiper-wrapper > .swiper-slide").length;

/* функция — положение scroll блока с контентом */
function isWorkspaceScroll() {
  "use strict";
  if ($(".wrapper > .workspace").scrollTop() > 0) {
    if (!$(".wrapper > .workspace > header").hasClass("scroll")) {
      $(".wrapper > .workspace > header").addClass("scroll");
    }
    if ($(".wrapper > .workspace").scrollTop() > $(".main").outerHeight()) {
      if (!$(".wrapper > .workspace > header.scroll").hasClass("up")) {
        $(".wrapper > .workspace > header.scroll").addClass("up");
      }
      if ($(".wrapper > .workspace > header.scroll").hasClass("down")) {
        $(".wrapper > .workspace > header.scroll").removeClass("down");
      }
    } else {
      if ($(".wrapper > .workspace > header.scroll").hasClass("up")) {
        $(".wrapper > .workspace > header.scroll").removeClass("up");
      }
      if (!$("header.scroll").hasClass("down")) {
        $(".wrapper > .workspace > header.scroll").addClass("down");
      }
    }
  } else {
    $(".wrapper > .workspace > header").removeClass();
  }
  return false;
}

/* функция — вызывается после того, как документ полностью загружен */
function isReady() {
  /* обрабатывать код в «строгом режиме» */
  "use strict";
  /* переменная (vh) — расчет реальной высоты рабочей области (важно для смартфонов) */
  let vh = $(window).innerHeight() * 0.01;
  /* устанавливаем свойство для всего документа (html) исходя из расчета реальной высоты */
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  /* ширина шапки равна ширине блока с контентом */
  if ($(".wrapper > .workspace > header").length) {
    $("header").css({
      "width": $("header").next("article").outerWidth() + "px"
    });
  }

  if ($(".prologue").length) {
    let prologue = parseInt($(".prologue").prev().height() - $(".prologue").prev().outerHeight());
    $(".prologue").css({
      "margin-top": "min(" + parseInt(prologue + $(window).innerWidth() * 0.01 * 5 - 8) + "px, " + parseInt(prologue + 24) + "px)"
    });
  }

  if ($(".wrapper > .workspace > article > .main").length) {
    isWorkspaceScroll();
  } else {
    if ($(".wrapper > .workspace > header").length) {
      $(".wrapper > .workspace > article").css({
        "margin-top": 80 + "px"
      });
    }
  }

  return false;
}

/* код внутри будет запущен когда страница будет полностью загружена, включая все фреймы, объекты и изображения */
$(document).ready(function () {
  /* обрабатывать код в «строгом режиме» */
  "use strict";

  $(".wrapper > .workspace").scroll(function () {
    if ($(".wrapper > .workspace > article > .main").length) {
      isWorkspaceScroll();
    }
    if ($(".wrapper > .workspace > header").length && $(".wrapper > .workspace > header").hasClass("opened")) {
      $(".wrapper > .workspace > header").removeClass("opened");
    }
  });

  $(document).on("touchend mouseup", ".square", function (e) {
    if ($("header").length && $(this).hasClass("burger")) {
      if ($("header").hasClass("opened")) {
        $("header").removeClass("opened");
      } else {
        $("header").addClass("opened");
      }
    }
    e.preventDefault();
  });

  /* вызов функции — после того, как документ полностью загружен */
  isReady();

  /* SWIPER — танцы с бубном */
  if (swiper_slide_length > 0) {

    let swiperParams = {
      slidesPerView: 1,
      spaceBetween: 8,
      navigation: {
        nextEl: ".center > .gallery.swiper-container > .swiper-button.next",
        prevEl: ".center > .gallery.swiper-container > .swiper-button.prev"
      },
      observer: true,
      observeSlideChildren: true,
      observeParents: true
    };

    if (swiper_slide_length < 2) {
      swiperParams.breakpoints = {
        481: {
          spaceBetween: 16
        },
        961: {
          spaceBetween: 24
        },
        1201: {
          spaceBetween: 32
        }
      };
    } else {
      if (swiper_slide_length > 2) {
        swiperParams.breakpoints = {
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
        };
      } else {
        swiperParams.breakpoints = {
          481: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          961: {
            slidesPerView: 2,
            spaceBetween: 24
          },
          1201: {
            slidesPerView: 2,
            spaceBetween: 32
          }
        };
      }
      swiperParams.loop = true;
    }

    const swiper = new Swiper(".center > .gallery.swiper-container > .swiper", swiperParams);

    swiper.on("resize", function () {
      if (swiper_slide_length > 1) {
        if (swiper_slide_length > 2) {
          if (swiper_slide_length > 3) {
            swiper.params.loop = true;
            swiper.loopCreate();
          } else {
            if ($(window).outerWidth() > 960) {
              swiper.params.loop = false;
              swiper.loopDestroy();
            } else {
              swiper.params.loop = true;
              swiper.loopCreate();
            }
          }
        } else {
          if ($(window).outerWidth() > 480) {
            swiper.params.loop = false;
            swiper.loopDestroy();
          } else {
            swiper.params.loop = true;
            swiper.loopCreate();
          }
        }
      } else {
        swiper.params.loop = false;
        swiper.loopDestroy();
      }

    });

  }

  return false;
});

/* окно поменяло ориентацию горизонтально <——> вертикально */
$(window).on("orientationchange", function () {
  /* обрабатывать код в «строгом режиме» */
  "use strict";
  /* перезагрузить документ */
  location.reload();
});

/* окно поменяло размер */
$(window).on("resize", function () {
  /* обрабатывать код в «строгом режиме» */
  "use strict";
  /* повторный вызов функции — после того, как документ полностью загружен (корректировка отображения элементов) */
  isReady();
});
