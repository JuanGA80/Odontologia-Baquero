let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.review-container');
    const totalSlides = slides.length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    document.querySelector('.comentarios').style.transform = `translateX(${offset}%)`;
}