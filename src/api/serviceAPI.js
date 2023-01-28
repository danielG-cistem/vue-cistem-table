import axios from 'axios';

const serviceAPI = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    timeout: 1000,
    headers: {'Content-Type': 'application/json; charset=utf-8'}
});

export default serviceAPI;