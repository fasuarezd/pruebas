import React, { useState } from 'react';
import { View, Button, TextInput, Text, Alert } from 'react-native';
import { loginUser } from './authService';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await loginUser(email, password);
            Alert.alert('Login exitoso', 'Bienvenido');
            navigation.navigate('Home'); // Cambia 'Home' por la pantalla deseada
        } catch (error) {
            Alert.alert('Error', 'Credenciales incorrectas');
        }
    };

    return (
        <View>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Iniciar Sesión" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
