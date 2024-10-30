import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { obtenerDatos } from './Fetch/Api1';

export default function App() {

  const [datos, setDatos] = useState(null)
  const [logeado, setLogeado] = useState(false)
  const [coches, setCoches] = useState([])

  const execDatos = async () => {
    try {
      const response = await obtenerDatos('toyota')
      if (response.status == 'OK') {
        setDatos(response.datos)
      } else {
        Alert.alert('Advertencia', response.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (logeado) {
      execDatos()
    } else {
      <Login />
    }

  }, [creado])

  return (
    <View style={styles.container}>
      {datos.map((dato, index) => (
        <Card>{dato}</Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
