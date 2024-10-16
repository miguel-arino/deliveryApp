import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://food-delivery.umain.io/api/v1', 
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default apiClient;
