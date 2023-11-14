document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.navlinks');
  
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
  });
  
  