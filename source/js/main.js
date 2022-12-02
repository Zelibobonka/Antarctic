import {iosVhFix} from './utils/ios-vh-fix';
import {initMenu} from './modules/init-menu';
import {createMap} from './modules/map';


window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initMenu();

  document.documentElement.style.setProperty('--scrollbarWidth',
      `${window.innerWidth - document.body.clientWidth}px`);

  window.addEventListener('load', createMap);
});
