const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
	'linear-gradient(180deg, rgba(108, 122, 218, 0) 0%, rgba(13, 51, 176, 1) 88%)',
	'linear-gradient(180deg, rgba(247, 46, 2, 0) 0%, rgba(236, 121, 121, 1) 88%)',
	'linear-gradient(90deg, rgba(2, 247, 211, 0) 0%,	rgba(121, 236, 235, 1) 88%)',
];

const options = {
	threshold: 0.7, // 70%
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
	entries.forEach(entry => {
		const className = entry.target.className;
		const activeAnchor = document.querySelector(`[data-page=${className}]`);
		const gradientIndex = entry.target.getAttribute(`data-index`);
		const coords = activeAnchor.getBoundingClientRect();
		const directions = {
			height: coords.height,
			width: coords.width,
			top: coords.top,
			left: coords.left,
		};

		if (entry.isIntersecting) {
			bubble.style.setProperty('left', `${directions.left}px`);
			bubble.style.setProperty('top', `${directions.top}px`);
			bubble.style.setProperty('width', `${directions.width}px`);
			bubble.style.setProperty('height', `${directions.height}px`);
			bubble.style.background = gradients[gradientIndex];
		}
	});
}

sections.forEach(section => {
	observer.observe(section);
});
