import {iosVhFix} from './utils/ios-vh-fix';
import {initMenu} from './modules/init-menu';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initMenu();

  // const card = document.querySelectorAll('.product-card__holder');
  // card.forEach((elem) => {
  //   elem.addEventListener('mouseover', () => {
  //     document.body.style.overflow = 'hidden';
  //   });

  //   elem.addEventListener('mouseout', () => {
  //     document.body.style.overflow = '';
  //   });
  // });

  document.documentElement.style.setProperty('--scrollbarWidth',
      `${window.innerWidth - document.body.clientWidth}px`);
});
