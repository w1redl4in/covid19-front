import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.covid19api.com/',
});

export default API;
