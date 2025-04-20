import axios from "axios";
const BASE_URL = "http://0.0.0.0:8000";

export const getBooks = async (query?: string) => {
  return axios
    .get(`${BASE_URL}/search?query=${query}`)
    .then((res) => {
      console.log("res", res);
      return res?.data;
    })
    .catch((error) => console.log(`getBooks error:`, error));
};
