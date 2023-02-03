/* функция — положение scroll блока с контентом */
function isWorkspaceScroll() {
  "use strict";
  if ($(".wrapper > .workspace > header").length && $(".wrapper > .workspace > header").hasClass("opened")) {
    $(".wrapper > .workspace > header").removeClass("opened");
  }
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
  $("header").css({
    "width": $("header").next("article").outerWidth() + "px"
  });

  if ($(".prologue").length) {
    let prologue = parseInt($(".prologue").prev().height() - $(".prologue").prev().outerHeight());
    $(".prologue").css({
      "margin-top": "min(" + parseInt(prologue + $(window).innerWidth() * 0.01 * 5 - 16) + "px, " + parseInt(prologue + 8) + "px)"
    });
  }

  isWorkspaceScroll();
  return false;
}

/* код внутри будет запущен когда страница будет полностью загружена, включая все фреймы, объекты и изображения */
$(document).ready(function () {
  /* обрабатывать код в «строгом режиме» */
  "use strict";

  $(".wrapper > .workspace").scroll(function () {
    isWorkspaceScroll();
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
