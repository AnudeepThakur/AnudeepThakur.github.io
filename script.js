// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll reveal animation
ScrollReveal().reveal('.reveal', {
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    distance: '20px',
    reset: true
});
