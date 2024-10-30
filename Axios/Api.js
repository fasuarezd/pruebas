// Con AXIOS


import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para incluir el token en las peticiones
api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token'); // Guarda y obtén el token usando AsyncStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;

