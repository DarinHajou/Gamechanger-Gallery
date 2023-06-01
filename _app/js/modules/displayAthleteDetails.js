import fetchAthleteDetails from './fetchAthleteDetails.js';

// Function to get the query parameter from the URL
function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

export default async function displayAthleteDetails() {
  try {
    // Get the athlete id from the URL
    const athleteId = getQueryParameter('id');
    
    const athleteDetails = await fetchAthleteDetails(athleteId);
    console.log("Fetched athlete details:", athleteDetails);

    // Update the HTML elements with the fetched data
    const athleteNameElement = document.getElementById("athlete-name");
    const athleteBioElement = document.getElementById("athlete-bio");
    const athleteBirthplaceElement = document.getElementById("athlete-birthplace");

    athleteNameElement.textContent = athleteDetails[0].name;
    athleteBioElement.textContent = athleteDetails[0].bio;
    athleteBirthplaceElement.textContent = athleteDetails[0].birthplace;
  } catch (error) {
    console.error("Error fetching athlete details:", error);
  }
  
}

displayAthleteDetails();
