import { sanity } from "../sanity.js";

export default async function fetchAthletes() {
  const query = `*[_type == 'athlete']{
    _id,
    name,
    slug,
    sport->{
      title,
      image {
        asset->{
          url
        }
      }
    },
    image {
      asset->{
        url
      }
    },
    bio,
    birthDate,
    nationality
  }`;

  console.log('Logging a message');
  
  try {
    const data = await sanity.fetch(query);
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
