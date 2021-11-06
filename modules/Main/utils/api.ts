import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
});

export default api;
