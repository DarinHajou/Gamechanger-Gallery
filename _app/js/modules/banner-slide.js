export default function () { 

	let activeSlide = 0;
	const slides = Array.from(document.querySelectorAll('.banner__slide'));
	
	function changeSlide() {
		slides.forEach((slide, index) => {
			if (index === activeSlide) {
				slide.classList.add('active');
			} else {
				slide.classList.remove('active');
			}
		});
	
		activeSlide = (activeSlide + 1) % slides.length;
	}

	changeSlide();  // Call the function once initially to show the first slide
	setInterval(() => {
		changeSlide();
	}, 4000);
};
