const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarCollapseShow = document.querySelector('.navbar-collapse.show');

navbarToggler.addEventListener('click', () => {
	navbarCollapse.classList.toggle('show');
});
dropdownToggle.addEventListener('click', () => {
	dropdownMenu.classList.toggle('show');
});

$( document ).ready(function() {
	navbarToggler.addEventListener('click', () => {
		$('.navbar-collapse').slideToggle();
	});
	
	$('#slide-btn').click(function (){
		$('.slide').slideToggle();
	});
});