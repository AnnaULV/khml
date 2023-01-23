var vhCSS = false;

/* функция — загрузка дополнительных CSS-файлов в шапку HTML-кода */
function loadCSS(source, type) {
  /* обрабатывать код в «строгом режиме» */
  "use strict";
  /* получение объекта (элемента) по имени тега (head) — первый найденный [0] */
  let s = document.getElementsByTagName("head")[0];
  /* получение элемента (link) */
  let sc = document.createElement("link");
  /* назначение атрибутов для созданного элемента (link) */
  sc.rel = type;
  sc.href = source;
  /* разместить созданный элемент (link — [sc]) со всеми назначенными атрибутами в полученном объекте (head — [s]) */
  s.appendChild(sc);
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
  /* если дополнительный CSS-файл еще не был загружен (переменная vhCSS = FALSE) */
  if (!vhCSS) {
    /* загружаем дополнительный CSS-файл */
    loadCSS("css/vh.css?" + $.now(), "stylesheet");
    /* дополнительный CSS-файл успешно загружен (назначение переменной vhCSS значения — TRUE) */
    vhCSS = true;
  }
  return false;
}

/* код внутри запущен когда страница будет полностью загружена, включая все фреймы, объекты и изображения */
$(window).on("load", function () {
  /* обрабатывать код в «строгом режиме» */
  "use strict";

  let parent = document.createElement("div");
  parent.setAttribute("style", "width:30px; height:30px; overflow:scroll");
  document.body.appendChild(parent);
  let scrollbarWidth = 30 - parent.clientWidth;
  if (scrollbarWidth > 0) {
    $("header").css({
      "width": parseInt($(window).innerWidth() - scrollbarWidth) + "px"
    });
  }
  document.body.removeChild(parent);

  $(".wrapper > .workspace").scroll(function () {
    if ($(".wrapper > .workspace").scrollTop() > $(".main").outerHeight()) {
      if (!$(".wrapper > .workspace > header").hasClass("scroll")) {
        $(".wrapper > .workspace > header").addClass("scroll");
      }
    } else {
      if ($(".wrapper > .workspace > header").hasClass("scroll")) {
        $(".wrapper > .workspace > header").removeClass("scroll");
      }
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
