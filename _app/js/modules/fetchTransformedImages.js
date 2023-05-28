//fetchTransformedImages.js

import { sanity } from "../sanity.js";

export default async function fetchTransformedImages() {
  const query = `*[_type == 'transformationImages']{
    _id,
    name,
    slug,
    image {
      asset->{
        url
      }
    },
    athlete->{
      _id,
      name
    },
    imageStyle->{_id, description}
  }`;

  try {
    const data = await sanity.fetch(query, { expandRefs: true });
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const transformationImagesContainer = document.getElementById(
  'transformationImagesContainer'
);

fetchTransformedImages().then((data) => {
  data.forEach((image) => {
    const transformedImageElement = createTransformedImageCard(image);
    console.log("Image:", image);
    transformationImagesContainer.appendChild(transformedImageElement);
  });
});

function createTransformedImageCard(image) {
  const card = document.createElement('div');
  card.classList.add('card', 'grid__column--3');

  const imageLink = document.createElement('a');
  imageLink.href = `path/to/athlete-details.html?id=${image.athlete._id}`;

  const imgElement = document.createElement('img');
  imgElement.src = image.image.asset.url;
  imgElement.alt = image.name;

  imageLink.appendChild(imgElement);
  card.appendChild(imageLink);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card__content');

  const titleElement = document.createElement('h3');
  titleElement.classList.add('card__title');
  titleElement.textContent = image.name;

  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('card__description');
  descriptionElement.textContent = '';

  // Check if imageStyle exists and has description
  const imageStyle = image.imageStyle || {};
  console.log("ImageStyle:", imageStyle);
  const description = image.imageStyle && image.imageStyle.description ? image.imageStyle.description : 'No description available';
  console.log("Description:", description);

  cardContent.appendChild(titleElement);
  cardContent.appendChild(descriptionElement);
  card.appendChild(cardContent);

  return card;
}