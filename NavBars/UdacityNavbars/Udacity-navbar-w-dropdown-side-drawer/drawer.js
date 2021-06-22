const menu = document.querySelector('#menu'); // hamburger
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const drawer = document.querySelector('#drawer');
const main = document.querySelector('main');

// click on the hamburger menu to open and close nav drawer
menu.addEventListener('click', (e) => {
	drawer.classList.toggle('open');
	e.stopPropagation();
});

// click on main content area to close nav drawer
main.addEventListener('click', () => {
	drawer.classList.remove('open');
});

// open and close dropdown menu
dropdownToggle.addEventListener('click', () => {
	dropdownMenu.classList.toggle('show');
});
