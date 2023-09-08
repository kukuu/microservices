// expenseApi.js
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000"; // Replace with your actual API base URL

export const createExpense = async (expenseData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/expenses/`, expenseData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllExpenses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/expenses/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getExpense = async (expenseId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/expenses/${expenseId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateExpense = async (expenseId, updatedExpenseData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/expenses/${expenseId}`,
      updatedExpenseData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteExpense = async (expenseId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/expenses/${expenseId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
