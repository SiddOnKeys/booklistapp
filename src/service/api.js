import axios from "axios";
// const API_URL = "http://127.0.0.1:3004/books";
const API_URL = "/api/books";

export const addUser = async (data) => {
  try {
    await axios.post(API_URL, data);
  } catch (error) {
    console.log("error while calling api", error.message);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error while getUser api", error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error while calling deleteUser api", error.message);
  }
};
