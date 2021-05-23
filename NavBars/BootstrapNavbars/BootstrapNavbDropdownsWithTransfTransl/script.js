const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
	navbarCollapse.classList.toggle('show');
});
dropdownToggle.addEventListener('click', () => {
	dropdownMenu.classList.toggle('show');
});
