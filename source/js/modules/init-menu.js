const header = document.querySelector('[data-main-header]');
const buttonOpen = document.querySelector('[data-open-menu]');
const navLink = document.querySelectorAll('[data-nav-link]');
const overlay = document.querySelector('[data-menu-overlay]');

const initMenu = () => {

  header.classList.remove('main-header--nojs');

  buttonOpen.addEventListener('click', () => {
    const close = () => {
      header.classList.remove('main-header--open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (!header.classList.contains('main-header--open')) {
      header.classList.add('main-header--open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      close();
    }

    navLink.forEach((elem) => {
      elem.addEventListener('click', () => {
        close();
      });
    });

    overlay.addEventListener('click', () => {
      close();
    });
  });
};

export {initMenu};
