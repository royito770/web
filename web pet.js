// JavaScript Document
// JavaScript para el carrusel
    let slideIndex = 0;
    showSlides();

    function moveSlide(n) {
        slideIndex += n;
        showSlides();
    }

    function showSlides() {
        let slides = document.querySelectorAll('.carousel-item');
        if (slideIndex >= slides.length) { slideIndex = 0; }
        if (slideIndex < 0) { slideIndex = slides.length - 1; }
        document.querySelector('.carousel-slide').style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
    }

    // Mover el carrusel automáticamente cada 3 segundos
    setInterval(function() {
        moveSlide(1);
    }, 3000);

document.addEventListener('scroll', function() {
    const image = document.querySelector('.scroll-image');
    const imagePosition = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (imagePosition < windowHeight) {
        image.style.bottom = '0';
        image.style.opacity = '1';
    } else {
        image.style.bottom = '-100px';
        image.style.opacity = '0';
    }
});
