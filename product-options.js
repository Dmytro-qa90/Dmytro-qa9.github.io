let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-image');
    const track = document.querySelector('.slider-track');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

window.onload = function () {
    showSlide(currentSlide);
};