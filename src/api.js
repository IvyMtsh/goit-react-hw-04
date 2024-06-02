import axios from "axios";

const API_KEY = "j_1RvHVzfB5kuINtob57nG8af3-CoOz79iFNwXziAzU";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

const fetchArticles = async (searchQuery, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery.trim(),
      page,
    },
  });
  return response.data;
};

export default fetchArticles;
