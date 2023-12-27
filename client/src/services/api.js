// API.js
import axios from "axios";

const API_URL = "http://localhost:8000/api/v1";

const API = {
  signUpUser: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/user/register`, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message); 
    }
  },
  signInUser: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/user/login`, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export { API };