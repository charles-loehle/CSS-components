const menu = document.querySelector('#menu');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (e) => {
  drawer.classList.toggle('open');
  e.stopPropagation();
});
main.addEventListener('click', () => {
  drawer.classList.remove('open');
});

dropdownToggle.addEventListener('click', () => {
	dropdownMenu.classList.toggle('show');
});
