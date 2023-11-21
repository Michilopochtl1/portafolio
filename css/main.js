document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.navlinks');
  
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
  });
  

  
//   --------------------CARRUSEL--------------------



$('.slider').slick({
    centerMode: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        Infinity: true,
        slidesToShow: 1
      },
    }]
  });
