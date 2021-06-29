const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

window.addEventListener('scroll', () => {
	console.log(pageYOffset);
	let current = '';
	sections.forEach(section => {
		// returns the distance from the top of the current element to the top of the body
		const sectionTop = section.offsetTop; // 72px, 1026px, 1980px, 2934px
		// console.log(sectionTop);

		// the height of a section
		const sectionHeight = section.clientHeight; // 954px
		// console.log(sectionHeight);

		// the number of pixels the document is currently scrolled down
		// if distance scrolled down is greater or equal to
		// 72px - 954px / 3 = -246px,
		// 1026 - 954 / 3 = 708,
		// 1980 - 954 / 3 = 1662,
		// 2934 - 954 / 3 = 2616

		if (pageYOffset >= sectionTop - sectionHeight / 3) {
			// get the current section's id
			current = section.getAttribute('id');
			// console.log(current);
		}
	});

	navLi.forEach(li => {
		li.classList.remove('active');
		if (li.classList.contains(current)) {
			li.classList.add('active');
		}
	});
});
