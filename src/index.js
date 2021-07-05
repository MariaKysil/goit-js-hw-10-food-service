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

updateTheme();

refs.checkboxThemeRef.addEventListener('change', onCheckboxClick);

function onCheckboxClick() {
  refs.bodyRef.classList.toggle(Theme.DARK);
  refs.bodyRef.classList.toggle(Theme.LIGHT);

  const currentTheme = refs.bodyRef.classList.value;
  localStorage.setItem('Theme', currentTheme);
}

function updateTheme() {
  const savedTheme = localStorage.getItem('Theme') || Theme.LIGHT;
  refs.bodyRef.classList.add(savedTheme);
  refs.checkboxThemeRef.checked = savedTheme === Theme.DARK;
}
