export default async function rotateCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItems = Array.from(carouselContainer.querySelectorAll('.carousel-item'));
    const degree = 360 / carouselItems.length;

    carouselItems.forEach((item, index) => {
        item.style.transform = `rotateY(${index * degree}deg) translateZ(230px)`; // Adjust as needed
    });
}
  
  // Call the function to set initial rotation
  rotateCarousel();
  
  // Call the function every 3 seconds to rotate the carousel
  document.addEventListener('DOMContentLoaded', (event) => {
    rotateCarousel();

    setInterval(() => {
        const activeItem = document.querySelector('.carousel-item.active');
        if (activeItem) {
            activeItem.classList.remove('active');
  
            const nextItem = activeItem.nextElementSibling || document.querySelector('.carousel-item:first-child');
            nextItem.classList.add('active');
  
            rotateCarousel();
        }
    }, 3000);
});
  