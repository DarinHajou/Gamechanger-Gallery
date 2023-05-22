export default function () {
	const searchIcon = document.querySelector('.search-icon');
	const searchClose = document.querySelector('.search-close');
	const searchBar = document.querySelector('.header__search input[type="search"]');
	const searchBarIcon = document.querySelector('.search-bar-icon');
 
	function handleResize() {
	  if (window.matchMedia('(min-width:1400px)').matches) {
		 // Screen is wider than 1024px, search bar should always be open
		 searchBar.style.display = '';
		 searchClose.style.display = 'none';
		 searchIcon.style.display = 'none';
		 searchBarIcon.style.display = 'block';
	  } else {
		 // Screen is narrower than 1024px
		 if (searchBar.style.display === 'block') {
			// Search bar is open
			searchClose.style.display = 'block';
			searchIcon.style.display = 'none';
			searchBarIcon.style.display = 'block';
		 } else {
			// Search bar is closed
			searchClose.style.display = 'none';
			searchIcon.style.display = 'block';
			searchBarIcon.style.display = 'none';
		 }
	  }
	}
 
	// Initialize visibility of search bar icon based on window size
	handleResize();
 
	searchIcon.addEventListener('click', function () {
	  this.style.display = 'none'; // Hide the search icon
	  searchClose.style.display = 'block'; // Show the close button
	  searchBar.style.display = 'block'; // Show the search bar
	  searchBarIcon.style.display = 'block'; // Show the search-bar-icon
	  handleResize(); // Update the visibility of the search icon on resize
	});
 
	searchClose.addEventListener('click', function () {
	  this.style.display = 'none'; // Hide the close button
	  searchIcon.style.display = 'block'; // Show the search icon
	  searchBar.style.display = 'none'; // Hide the search bar
	  searchBarIcon.style.display = 'none'; // Hide the search-bar-icon
	  handleResize(); // Update the visibility of the search icon on resize
	});
 
	// When the window is resized, call handleResize function
	window.addEventListener('resize', handleResize);
 
	document.querySelector('.header__menu-button').addEventListener('click', function () {
		document.querySelector('.header__nav').classList.toggle('header__nav--active');
		this.classList.toggle('header__menu-button--active');
	 });
	 
 } 
