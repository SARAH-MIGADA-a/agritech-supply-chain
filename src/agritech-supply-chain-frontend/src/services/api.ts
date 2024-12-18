import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com/api', // Replace with your API base URL
  timeout: 10000, // Set a timeout
});

// Optionally add interceptors here for handling requests/responses

export default api;
