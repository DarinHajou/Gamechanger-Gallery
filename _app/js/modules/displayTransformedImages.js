//displayTransformationImages.js

	export default function () { 

		// Function to create HTML elements for each transformed image
		function createTransformedImageElements(image) {
		// Create an anchor element for the image
		const imageLink = document.createElement('a');
		imageLink.href = `path/to/athlete-details.html?id=${image.athlete._id}`;
		
		// Create an image element
		const imgElement = document.createElement('img');
		imgElement.src = image.image.asset.url;
		imgElement.alt = image.name;
		
		// Append the image element to the anchor element
		imageLink.appendChild(imgElement);
		
		return imageLink;
		}	
	}
