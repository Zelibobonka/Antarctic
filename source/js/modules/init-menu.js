const header = document.querySelector('[data-main-header]');
const buttonOpen = document.querySelector('[data-open-menu]');
const navLink = document.querySelectorAll('[data-nav-link]');
const overlay = document.querySelector('[data-menu-overlay]');

const initMenu = () => {

  header.classList.remove('main-header--nojs');

  buttonOpen.addEventListener('click', () => {
    header.classList.toggle('main-header--open');
    overlay.classList.toggle('active');
    document.body.style.overflow = 'hidden';

    const close = () => {
      header.classList.remove('main-header--open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

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
