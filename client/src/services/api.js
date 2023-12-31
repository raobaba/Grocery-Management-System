// API.js
import axios from "axios";

const API_URL = "https://c-point-server.onrender.com/api/v1";

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
  addGroceryItem: async (groceryData) => {
    try {
      const response = await axios.post(
        `${API_URL}/grocery/create`,
        groceryData
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data.message);
    }
  },
  getGroceryItems: async () => {
    try {
      const response = await axios.get(`${API_URL}/grocery/getAll`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  updateGroceryItem: async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/grocery/update/${id}`, updatedData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  deleteGroceryItem: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/grocery/delete/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
};

export { API };
