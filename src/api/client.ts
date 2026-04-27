import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// Use environment variable for base URL, fallback to your local IP for development
const API_BASE_URL = process.env.API_BASE_URL || 'http://192.168.1.104:8000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('jwt_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await SecureStore.deleteItemAsync('jwt_token');
      // Optionally trigger a logout event
    }
    return Promise.reject(error);
  }
);

export default apiClient;