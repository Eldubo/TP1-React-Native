import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const esperarAlgunosMilisegundos = async () => {
      try {
        // Evitar que el splash screen se oculte automáticamente
        await SplashScreen.preventAutoHideAsync();

        // Simular una demora de 5 segundos
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Cambiar el estado de carga a falso y ocultar el splash screen
        setIsLoading(false);
        await SplashScreen.hideAsync();
      }
    };

    esperarAlgunosMilisegundos();
  }, []);

  // Renderizado condicional: mostrar una pantalla en blanco mientras se carga
  if (isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working in your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
