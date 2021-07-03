import './sass/main.scss';
import menu from './menu.json';
import menuTemplate from './templates/menu.hbs';

const refs = {
  menuRef: document.querySelector('.js-menu'),
  bodyRef: document.querySelector('body'),
  checkboxThemeRef: document.querySelector('#theme-switch-toggle'),
};

refs.menuRef.innerHTML = menuTemplate(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.bodyRef.classList.add(Theme.LIGHT);

updateTheme();

refs.checkboxThemeRef.addEventListener('change', onCheckboxClick);

function onCheckboxClick() {
  refs.bodyRef.classList.toggle(Theme.DARK);
  refs.bodyRef.classList.toggle(Theme.LIGHT);

  const currentTheme = refs.bodyRef.classList.value;
  localStorage.setItem('Theme', currentTheme);
}

function updateTheme() {
  const savedTheme = localStorage.getItem('Theme');

  if (savedTheme === Theme.DARK) {
    refs.checkboxThemeRef.checked = 'true';
    onCheckboxClick();
  }
}
