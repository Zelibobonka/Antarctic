import {iosVhFix} from './utils/ios-vh-fix';
import {initMenu} from './modules/init-menu';


window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initMenu();

  document.documentElement.style.setProperty('--scrollbarWidth',
      `${window.innerWidth - document.body.clientWidth}px`);
});
