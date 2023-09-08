// expenseApi.js
import axios from "axios";

const API_BASE_URL = "http://localhost:3011/api"; // Replace with your actual API base URL

export const getAllMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
