import {iosVhFix} from './utils/ios-vh-fix';
import {initMenu} from './modules/init-menu';
import {saveFormData} from './modules/save-form-data';
import './modules/map';


window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initMenu();
  saveFormData();

  window.addEventListener('load', () => {
  });
});
