const btnHamburger = document.getElementById('btnHamburger');
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', function () {
	if (header.classList.contains('open')) {
		// Close Hamburger Menu
		header.classList.remove('open');
	} else {
		// Open Hamburger Menu
		header.classList.add('open');
	}
});