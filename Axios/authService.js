import api from './Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Registrar Usuario
export const registerUser = async (userData) => {
    try {
        const response = await api.post('/register', userData);
        return response.data;
    } catch (error) {
        console.error('Error en el registro:', error.response.data);
        throw error;
    }
};

// Login de Usuario
export const loginUser = async (email, password) => {
    try {
        const response = await api.post('/login', { email, password });
        const { access_token } = response.data;

        // Guardamos el token en AsyncStorage
        await AsyncStorage.setItem('token', access_token);
        return response.data;
    } catch (error) {
        console.error('Error en el login:', error.response.data);
        throw error;
    }
};

// Obtener datos del usuario
export const getUserData = async () => {
    try {
        const response = await api.get('/userData');
        return response.data;
    } catch (error) {
        console.error('Error obteniendo datos de usuario:', error.response.data);
        throw error;
    }
};

// Añadir coche
export const addCar = async (carData) => {
    try {
        const response = await api.post('/addCars', carData);
        return response.data;
    } catch (error) {
        console.error('Error añadiendo coche:', error.response.data);
        throw error;
    }
};

// Obtener coches del usuario
export const getUserCars = async () => {
    try {
        const response = await api.get('/getUserCars');
        return response.data;
    } catch (error) {
        console.error('Error obteniendo coches:', error.response.data);
        throw error;
    }
};
