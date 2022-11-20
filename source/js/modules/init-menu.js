const buttonOpen = document.querySelector('[data-open-menu]');
const buttonClose = document.querySelector('[data-close-menu]');
const menu = document.querySelector('[data-main-header]');
const overlay = document.querySelector('[data-menu-overlay]');
const nav = document.querySelector('[data-header-nav]');
const logo = document.querySelector('[data-logo-header]');
const navLink = document.querySelectorAll('[data-nav-link]');

const breakpoint = window.matchMedia('(max-width:767px)');

const initMenu = () => {
  const breakpointChecker = () => {
    if (breakpoint.matches) {

      const doIfNotNull = (elem, func) => {
        if (elem === null) {
          return;
        }
        func(elem);
      };

      doIfNotNull(menu, (m) => m.classList.remove('main-header--open'));
      doIfNotNull(nav, (m) => {
        m.style.display = 'none';
      });
      doIfNotNull(buttonClose, (m) => {
        m.style.display = 'none';
      });
      doIfNotNull(buttonOpen, (m) => {
        m.style.display = 'block';
      });
      doIfNotNull(logo, (m) => m.classList.remove('logo--menu'));

      buttonOpen.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.add('main-header--open');
        nav.style.display = 'block';
        nav.style.height = '100vh';
        logo.classList.add('logo--menu');
        overlay.classList.add('active');
        buttonClose.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });

      const close = () => {
        menu.classList.remove('main-header--open');
        nav.style.display = 'none';
        logo.classList.remove('logo--menu');
        overlay.classList.remove('active');
        buttonClose.style.display = 'none';
        buttonOpen.style.display = 'block';
        document.body.style.overflow = '';
      };

      navLink.forEach((elem) => {
        elem.addEventListener('click', () => {
          close();
        });
      });

      buttonClose.addEventListener('click', () => {
        close();
      });

      doIfNotNull(overlay, (o) => {
        o.addEventListener('click', () => {
          close();
        });
      });
    } else {
      logo.classList.add('logo--menu');
      nav.style.display = 'block';
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      buttonClose.style.display = 'none';
      buttonOpen.style.display = 'none';
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initMenu};
