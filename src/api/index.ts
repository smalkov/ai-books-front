import axios from "axios";
const BASE_URL = "http://127.0.0.1:5000/api/libbooks";
//?page=1&limit=100

export const getBooks = async (page = 1, limit = 50) => {
  return axios
    .get(`${BASE_URL}?page=${page}&limit=${limit}`)
    .then((res) => {
      console.log("res", res);
      return res?.data;
    })
    .catch((error) => console.log(`getBooks error:`, error));
};
