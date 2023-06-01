//fetchAthleteDetails.js
import { sanity } from "../sanity.js";

export default async function fetchAthleteDetails(athleteId) {
	// Modify the query to fetch the athlete details for a specific athlete
	const query = `*[_type == 'athlete' && _id == '${athleteId}']{
	  name,
	  bio,
	  birthplace
	}`;
 
	try {
	  const data = await sanity.fetch(query);
	  console.log("Fetched data:", data);
	  return data;
	} catch (error) {
	  console.error("Error fetching data:", error);
	  throw error;
	}
 }
