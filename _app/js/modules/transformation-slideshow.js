export default function () {

	function setupSlideshow(slideshow) {
		 const slides = slideshow.querySelectorAll('.latest-transformations__slide');
		 let currentIndex = 0;

		 function updateSlideIndex() {
			  slides.forEach(slide => slide.classList.remove('selected'));
			  slides[currentIndex].classList.add('selected');
			  slideshow.querySelector('.latest-transformations__slideshow__track').style.transform = 'translateX(' + (-25 * currentIndex) + '%)';
		 }

		 slideshow.querySelector('.latest-transformations__slideshow__button--left').addEventListener('click', function () {
			  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
			  updateSlideIndex();
		 });

		 slideshow.querySelector('.latest-transformations__slideshow__button--right').addEventListener('click', function () {
			  currentIndex = (currentIndex + 1) % slides.length;
			  updateSlideIndex();
		 });

		 updateSlideIndex();
	}

	document.addEventListener('DOMContentLoaded', function () {
		 const slideshows = document.querySelectorAll('.latest-transformations__slideshow');
		 slideshows.forEach(setupSlideshow);
	});

}
