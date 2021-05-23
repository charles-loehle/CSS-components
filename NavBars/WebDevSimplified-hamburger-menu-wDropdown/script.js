const hamburger = document.querySelector('.hamburger');
const navbarLinks = document.querySelector('.navbar-links');
const dropdownTrigger = document.querySelector('.dropdown-trigger');
const dropdownContent = document.querySelector('.dropdown-content');

hamburger.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
});

dropdownTrigger.addEventListener('click', () => {
	dropdownContent.classList.toggle('open');
});
