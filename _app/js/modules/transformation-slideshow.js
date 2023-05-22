export default function () {

// Execute when the entire HTML document is fully loaded.
document.addEventListener('DOMContentLoaded', function () {
	// Select all the slides and assign them to the 'slides' variable.
	const slides = document.querySelectorAll('.latest-transformation__slide');

	// Index to keep track of the current slide.
	let currentIndex = 0;

	// Function to remove 'selected' class from all slides and add it to the current slide.
function updateSlideIndex() {
	// Loop through all slides.
	for (let i = 0; i < slides.length; i++) {
		 // Remove 'selected' class from the slide.
		 slides[i].classList.remove('selected');
	}
	// Add 'selected' class to the current slide.
	slides[currentIndex].classList.add('selected');

	// Adjust the track's position to center the current slide.
	document.querySelector('.latest-transformation__slideshow__track').style.transform = 'translateX(' + (-25 * currentIndex) + '%)';
}

	// Add event listener for the left button click.
	document.querySelector('.latest-transformation__slideshow__button--left').addEventListener('click', function () {
		 // Calculate the index of the previous slide, ensuring we loop back to the last slide from the first.
		 currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		 // Update the slide display.
		 updateSlideIndex();
	});

	// Add event listener for the right button click.
	document.querySelector('.latest-transformation__slideshow__button--right').addEventListener('click', function () {
		 // Calculate the index of the next slide, ensuring we loop back to the first slide after the last.
		 currentIndex = (currentIndex + 1) % slides.length;
		 // Update the slide display.
		 updateSlideIndex();
	});

	// Update the slide display when the page loads to start with the first slide selected.
	updateSlideIndex();
	});
}
