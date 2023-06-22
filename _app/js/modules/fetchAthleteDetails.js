//fetchAthleteDetails.js

// Fetch athlete details from Sanity
import { sanity } from "../sanity.js";

export default async function fetchAthleteDetails(athleteId) {
  const query = `*[_type == 'athlete' && _id == $athleteId]{
    _id,
    name,
    slug,
    sport->{name},
    image {
      asset->{
        url
      }
    },
    bio,
    birthDate,
    nationality,
    "transformedImages": *[_type == 'transformationImages' && athlete._ref == ^._id]{
      _id,
      name,
      slug,
      image {
        asset->{
          url
        }
      },
      imageStyle->{_id, name, description}
    }
  }[0]`;

  try {
    const data = await sanity.fetch(query, { athleteId: athleteId });
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}



  // This should be executed when athlete-details-page.html is loaded
  const urlParams = new URLSearchParams(window.location.search);
  const athleteId = urlParams.get('id');

  console.log('athleteId:', athleteId);
  
  fetchAthleteDetails(athleteId).then((data) => {
    // Code here to update your page with the fetched data.
    // This would depend on the specific structure and elements of your page.
    document.getElementById('athlete-image').src = data.image.asset.url;
    document.getElementById('athlete-name').textContent = data.name;
    document.getElementById('athlete-bio').textContent = data.bio;
    document.getElementById('athlete-birthDate').textContent = new Date(data.birthDate).toLocaleDateString();
    document.getElementById('athlete-nationality').textContent = data.nationality;
  
    // Get the container element where you want to add the transformed images
    const carouselContainer = document.querySelector('.carousel-container');
  
    // Iterate over each transformed image and add it to the container
    data.transformedImages.forEach((image, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = image.image.asset.url;
      imgElement.alt = image.name;
      imgElement.classList.add('carousel-item'); // Add this class to each item
      if (index === 0) imgElement.classList.add('active'); // Add 'active' class to the first image
      carouselContainer.appendChild(imgElement);
    });
  });
  