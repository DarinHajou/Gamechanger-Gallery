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
    }
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
