import axios from "axios";
const BASE_URL = "http://0.0.0.0:8000";

export const getBooks = async (query?: string, limit: number = 50) => {
  return axios
    .get(`${BASE_URL}/search`, {
      params: {
        query,
        limit,
      },
    })
    .then((res) => {
      console.log("res", res);
      return res?.data;
    })
    .catch((error) => console.log(`getBooks error:`, error));
};
