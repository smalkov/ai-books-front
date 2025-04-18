import axios from "axios";
const BASE_URL = "https://0bf2-94-131-15-230.ngrok-free.app";

export const getBooks = async (page = 1, limit = 50) => {
  return axios
    .get(`${BASE_URL}/api/libbooks?page=${page}&limit=${limit}`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
    .then((res) => {
      console.log("res", res);
      return res?.data;
    })
    .catch((error) => console.log(`getBooks error:`, error));
};
