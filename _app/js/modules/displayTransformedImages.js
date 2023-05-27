import fetchTransformedImages from './fetchTransformedImages.js';

export default function displayTransformedImages() {
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

  // Assuming you have a container element with the id "transformationImagesContainer" in your HTML
  const transformationImagesContainer = document.getElementById('transformationImagesContainer');

  // Fetch the transformation images data
  fetchTransformedImages().then((data) => {
    // Iterate over the fetched data and create HTML elements for each transformed image
    data.forEach((image) => {
      const transformedImageElement = createTransformedImageElements(image);
      transformationImagesContainer.appendChild(transformedImageElement);
    });
  });
}
