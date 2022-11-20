/* eslint-disable */

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938635, 30.323118],
          zoom: 15,
          controls: []
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemarkWithContent = new ymaps.Placemark([59.93758158614174, 30.322760541927888], {
          hintContent: 'Круизы в Антарктику'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/svg/contact-marker.svg',
          // Размеры метки.
          iconImageSize: [18, 22],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -5],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemarkWithContent);
});
