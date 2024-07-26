import axios from 'axios';

const axiosExternal = axios.create({
  baseURL: 'http://localhost:5000/api/v1/',
  timeout: 10000, // Optional: set a timeout
  headers: {
    'Content-Type': 'application/json',
    // You can add more default headers here
  },
});

export default axiosExternal;
