const createMap = () => {
  if (window.ymaps) {
    const ymaps = window.ymaps;
    ymaps.ready(() => {
      const myMap = new ymaps.Map('map', {
        center: [59.938635, 30.323118],
        zoom: 15,
        controls: [],
      }, {
        searchControlProvider: 'yandex#search',
      });

      const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      );

      const myPlacemarkWithContent = new ymaps.Placemark([59.93758158614174, 30.322760541927888], {
        hintContent: 'Круизы в Антарктику',
      }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/svg/contact-marker.svg',
        iconImageSize: [18, 22],
        iconImageOffset: [-15, -5],
        iconContentOffset: [15, 15],
        iconContentLayout: MyIconContentLayout,
      });

      myMap.geoObjects
          .add(myPlacemarkWithContent);
    });
  }
};

export {createMap};
