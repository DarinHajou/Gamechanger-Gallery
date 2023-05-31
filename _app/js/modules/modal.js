// modal.js
export default function createModal(description) {
	const modal = document.createElement('div');
	modal.classList.add('modal');

	const modalContent = document.createElement('div');
	modalContent.classList.add('modal-content');

	const descriptionLink = document.createElement('a');
	descriptionLink.href = 'path/to/athlete-details.html';
	descriptionLink.target = '_blank'; // Open the link in a new tab/window
	descriptionLink.style.textDecoration = 'none'; // Remove link decoration

	const descriptionText = document.createElement('p');
	descriptionText.textContent = description || 'Image description or additional information';

	descriptionLink.appendChild(descriptionText);
	modalContent.appendChild(descriptionLink);

	modal.appendChild(modalContent);

	// Add event listener to show modal on hover
	modal.addEventListener('mouseenter', () => {
		modal.classList.add('show');
	});
 
	// Add event listener to hide modal on mouseleave
	modal.addEventListener('mouseleave', () => {
	  modal.classList.remove('show');
	});
 
	return modal;
 }
 