// modal.js
export default function createModal(description) {
	const modal = document.createElement('div');
	modal.classList.add('modal');
 
	const modalContent = document.createElement('div');
	modalContent.classList.add('modal-content');
 
	const descriptionText = document.createElement('p');
	descriptionText.textContent = description || 'Image description or additional information';
 
	modalContent.appendChild(descriptionText);
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
 