const hamburger = document.querySelector('.hamburger');
const navbarLinks = document.querySelector('.navbar-links');

hamburger.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // The Element.scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically.
  console.log(document.body.scrollTop);
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.querySelector(".navbar").style.padding = "5px 10px";
    document.querySelector(".brand-title").style.fontSize = "25px";
  } else {
    document.querySelector(".navbar").style.padding = "20px 10px";
    document.querySelector(".brand-title").style.fontSize = "35px";
  }
}