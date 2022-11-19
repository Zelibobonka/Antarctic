import {iosVhFix} from './utils/ios-vh-fix';
import {initMenu} from './modules/init-menu';
import './modules/map';


window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initMenu();

  window.addEventListener('load', () => {
  });
});
