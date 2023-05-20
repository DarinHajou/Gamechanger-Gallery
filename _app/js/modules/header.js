export default function () {
	const searchIcon = document.querySelector('.search-icon');
	const searchClose = document.querySelector('.search-close');
	const searchBar = document.querySelector('.header__search input[type="search"]');
 
	searchIcon.addEventListener('click', function() {
		 // Only show the search bar if screen width is less than 480px
			  this.style.display = 'none';
			  searchClose.style.display = 'block';
			  searchBar.style.display = 'block';
			  searchBar.classList.add('center-search');  // Add the new CSS class
	});
	
	searchClose.addEventListener('click', function() {
		 // Only hide the search bar if screen width is less than 480px
			  this.style.display = 'none';
			  searchIcon.style.display = 'block';
			  searchBar.style.display = 'none';
			  searchBar.classList.remove('center-search');  // Removes the CSS class
	});

	// When the window is resized, check if we need to show the search icon
	window.addEventListener('resize', function() {
		const menuButton = document.querySelector('.header__menu-button');
		 if (window.matchMedia('(min-width:1040px)').matches) {
			  searchIcon.style.display = 'none';
			  searchBar.style.display = 'block';
		 } else {
			  searchIcon.style.display = 'block';
			  searchClose.style.display = 'none';
			  searchBar.style.display = 'none';
		 }
	});

	document.querySelector('.header__menu-button').addEventListener('click', function() {
		 document.querySelector('.header__nav').classList.toggle('header__nav--active');
	});
}
