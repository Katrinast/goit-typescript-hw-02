import axios from "axios";
import { apiResponse } from "./apiService.type";

const ACCESS_KEY = "PSgELPz_bnYTQoxHHSSH9pZE4asrGjXhFZhJWu344Iw";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${ACCESS_KEY}`;
 
  

export const fetchImages = async (query: string, page: number): Promise<apiResponse | never> => {
  const response = await axios.get<apiResponse>("/search/photos", {
    params: {
      query,
      page,
      orientation: 'landscape',
      per_page: 15,
    },
  });
  return response.data;
}


