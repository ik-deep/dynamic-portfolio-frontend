// client/src/api/portfolioApi.js
import axios from 'axios';

const api = axios.create({
    // IMPORTANT: Make sure this matches your Express server port
    baseURL: 'http://localhost:5000/api', 
});

export default api;