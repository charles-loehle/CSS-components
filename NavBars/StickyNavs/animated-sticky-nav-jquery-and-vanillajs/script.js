// $(document).ready(function () {
// 	$(window).scroll(function () {
// 		var scrollTop = $(window).scrollTop(); // distance from the currently scrolled to position to the top of the page. vanilla: window.pageYOffset

// 		// SHRINK THE HEADER AND THE LOGO BY REMOVING PADDING AND CHANGING FONT SIZE
// 		// if user scrolls past 49px, add class of 'header-fixed' to the header, otherwise remove it.
// 		if (scrollTop > 49) {
// 			$('#topnav').addClass('header-fixed');
// 		} else {
// 			$('#topnav').removeClass('header-fixed');
// 		}

// 		// change the style of the navbar when the user scrolls into the next zone.
// 		var topOffset = $('#demosection2').offset().top; // distance from top of the page to demosection 2
// 		var headerHeight = $('#topnav').height(); // nav height 
// 		var transitionPoint = topOffset - headerHeight;// distance from top of the page to demosection 2 - height of header.
// 		// console.log(transitionPoint);
// 		// console.log(topOffset, headerHeight);

// 		// CHANGE THE HEADER BG COLOR AND LOGO SIZE
// 		// if user scrolls past the designated point, add class of 'alt=header' to the header, otherwise remove it.
// 		if (scrollTop > transitionPoint) {
// 			$('#topnav').addClass('alt-header');
// 		} else {
// 			$('#topnav').removeClass('alt-header');
// 		}
// 	});
// });


// REFACTORED
const header = document.querySelector('#topnav');
const demosection2 = document.querySelector('#demosection2');

	const stickyNav = function () {
		const scrollTop = window.pageYOffset; // distance from the currently scrolled to position to the top of the page. 
		// console.log(scrollTop);
		
		// ON SCROLL, SHRINK THE HEADER AND THE LOGO BY REMOVING PADDING AND CHANGING FONT SIZE
		// if user scrolls past 49px, add class of 'header-fixed' to the header, otherwise remove it.
		if (scrollTop > 49) {
			header.classList.add('header-fixed')
		} else {
			header.classList.remove('header-fixed')
		}

		// change the style of the navbar when the user scrolls into the next zone.
		const topOffset = demosection2.offsetTop; // distance from top of the page to demosection 2
		// console.log(topOffset);
		
		const headerHeightWithPadding = parseInt(window.getComputedStyle(header).height);
		const headerPadding = parseInt(window.getComputedStyle(header).paddingTop)
		const headerHeight = headerHeightWithPadding - headerPadding;

		// nav height 
		const transitionPoint = topOffset - headerHeight;// distance from top of the page to demosection 2 - height of header.

		// CHANGE THE HEADER BG COLOR AND LOGO SIZE
		// if user scrolls past the designated point, add class of 'alt=header' to the header, otherwise remove it.
		if (scrollTop > transitionPoint) {
			header.classList.add('alt-header');
		} else {
			header.classList.remove('alt-header');
		}
	}

window.addEventListener('scroll', stickyNav);