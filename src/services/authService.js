import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const login = (data) => {
  return axios.post(`${API_URL}/login`, data);
};

export const register = (data) => {
  return axios.post(`${API_URL}/register`, data);
};
