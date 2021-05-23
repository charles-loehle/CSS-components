(function ($) {
	/******************Hamburger Menu***************/

	var menu = document.querySelector('.main-nav');
	var hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', function(){
	   //the ul ".main-nav" has height:0; and transition:height 0.6s; then the class ".open" added to the ul gives it a height of 177px which exposes the menu
	   menu.classList.toggle('open');
	});
	
	// $('.main-nav a').on('click', function(){
	//    menu.classList.remove('open');
	//    console.log('clicked');
	// });

	// //jquery version
	// var menu = $('.main-nav');
	// var hamburger = $('.hamburger');
	// var links = $('.main-nav a');

	// hamburger.on('click', function () {
	// 	menu.toggleClass('open');
	// });

	// links.on('click', function () {
	// 	menu.removeClass('open');
	// });

	/******************************************/

	/*************Parallax Scrolling Effect********/

	var $window = $(window);

	$('div[data-type="background"]').each(function () {
		var $bgobj = $(this);
		$(window).scroll(function () {
			//yPos is made negative because the $bgobj's background image is being shifted up on the page. It's divided by the data-speed=5 which makes it a smaller number than the $window.scrollTop() therefore, the $bgobj scrolls slower than the actual $window.scrollTop() distance
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var coords = '50% ' + yPos + 'px';
			$bgobj.css({
				backgroundPosition: coords,
			});
		});
	});

	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') ==
					this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length
					? target
					: $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate(
						{
							scrollTop: target.offset().top,
						},
						1000,
						function () {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(':focus')) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						}
					);
				}
			}
		});
})(jQuery);
