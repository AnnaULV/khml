let timerID = setInterval(function () {
  if (typeof ymaps !== "undefined") {
    ymaps.ready(init);

    function init() {
      "use strict";
      var myMap = new ymaps.Map('map', {
        center: [55.936564, 37.391705],
        zoom: 11,
        controls: ['zoomControl'],
        behaviors: ['drag']
      }, {
        zoomControlSize: 'small',
        searchControlProvider: 'yandex#search',
        yandexMapDisablePoiInteractivity: true
      });

      myMap.geoObjects.add(new ymaps.Placemark([55.957896, 37.353721], {
        balloonContent: "<p><strong>Бизнес-парк</strong><br>микрорайон Подрезково<br>Химки, Московская область, 141402<br><a href='tel:+74997531654' title='+7 (499) 753-16-54'>+7 (499) 753-16-54</a><br><a href='https://yandex.ru/maps/213/moscow/?mode=routes&rtext=~55.957896,37.353721&rtt=auto' title='Схема проезда' target='_blank' rel='noopener'>Схема проезда</a></p>",
        hintContent: "Бизнес-парк"
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/location.323232.svg?123',
        iconImageSize: [40, 74],
        iconImageOffset: [-20, -74]
      }));

      myMap.geoObjects.add(new ymaps.Placemark([55.895232, 37.429690], {
        balloonContent: "<p><strong>Офис</strong><br>Ленинградская улица, с25<br>Химки, Московская область, 141402<br><a href='tel:+74997531654' title='+7 (499) 753-16-54'>+7 (499) 753-16-54</a><br><a href='https://yandex.ru/maps/213/moscow/?mode=routes&rtext=~55.895206,37.429503&rtt=auto' title='Схема проезда' target='_blank' rel='noopener'>Схема проезда</a></p>",
        hintContent: "Офис"
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/location.BA0C2F.svg?123',
        iconImageSize: [40, 74],
        iconImageOffset: [-20, -74]
      }));

      // myMap.setBounds(myMap.geoObjects.getBounds());

      myMap.geoObjects.events.add("click", function (e) {
        setTimeout(function () {
          myMap.setCenter(e.get('target').geometry.getCoordinates(), 16, {
            checkZoomRange: true
          });
        }, 250);
      });
    }

    /* удаление переменной */
    clearInterval(timerID);
  }
}, 250);
