// main.js
import header from './modules/header.js';
import bannerSlide from './modules/bannerSlide.js';
import transformSlideshow from './modules/transformationSlideshow.js';
import fetchTransformedImages from './modules/fetchTransformedImages.js';
import createModal from './modules/modal.js';
import fetchAthleteDetails from './modules/fetchAthleteDetails.js';
import carousel from './modules/carousel.js';
import slider from './modules/transformSlider.js'

transformSlideshow();
slider();

document.addEventListener('DOMContentLoaded', (event) => {
    header();
    bannerSlide();
    // rotateCarousel();

    // Determine the current page
    const currentPage = window.location.pathname.split("/").pop();
    console.log('currentPage:', currentPage);

    // Only fetch transformed images if on the main details page
    if (currentPage === 'main-details-page.html') {
        console.log("fetchTransformedImages called from main.js");
        fetchTransformedImages();
        
    }

    // Only fetch athlete details if on the athlete details page
    if (currentPage === 'athlete-details-page.html') {
        const urlParams = new URLSearchParams(window.location.search);
        const athleteId = urlParams.get('id');
  
        console.log("fetchAthleteDetails called from main.js");
        createModal();
        fetchAthleteDetails(athleteId).then(() => {
            carousel();  // Initialize the carousel after the athlete details have been fetched
        });
    } 
});
