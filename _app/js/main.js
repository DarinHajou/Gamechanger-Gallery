// main.js
import header from './modules/header.js';
import bannerSlide from './modules/banner-slide.js';
import transformSlideshow from './modules/transformation-slideshow.js';
import fetchTransformedImages from './modules/fetchTransformedImages.js';
import createModal from './modules/modal.js';
import fetchAthleteDetails from './modules/fetchAthleteDetails.js';
import carousel from './modules/carousel.js';

document.addEventListener('DOMContentLoaded', (event) => {
    header();
    bannerSlide();
    transformSlideshow();
    carousel();

// Determine the current page
const currentPage = window.location.pathname.split("/").pop();
console.log('currentPage:', currentPage);

// Only fetch transformed images if on the main page
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
    fetchAthleteDetails(athleteId);
  } 
});