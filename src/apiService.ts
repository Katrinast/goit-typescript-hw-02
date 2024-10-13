import axios from "axios";

const ACCESS_KEY = "PSgELPz_bnYTQoxHHSSH9pZE4asrGjXhFZhJWu344Iw";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${ACCESS_KEY}`;
 
  

export const fetchImages = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      orientation: 'landscape',
      per_page: 15,
    },
  });
  return response.data;
}


