import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { getUserData, getUserCars } from './authService';

const HomeScreen = () => {
    const [user, setUser] = useState(null);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUserData();
                setUser(userData.user);

                const carsData = await getUserCars();
                setCars(carsData.car);
            } catch (error) {
                Alert.alert('Error', 'No se pudieron obtener los datos');
            }
        };

        fetchData();
    }, []);

    return (
        <View>
            <Text>Bienvenido, {user?.username}</Text>
            <Text>Lista de coches:</Text>
            {cars.map((car, index) => (
                <Text key={index}>{car.modelo}</Text>
            ))}
        </View>
    );
};

export default HomeScreen;
