import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, TextInput, View, useColorScheme } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const colorScheme = useColorScheme(); // 'light' or 'dark'
const [text, onChangeText] = React.useState('Correo electronico');
const [text2, onChangeNumber] = React.useState('Contraseña');

export default function Registrarse() {
  return (
    <ParallaxScrollView 
      headerBackgroundColor={{ light: '#ffffffff', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logotrustnet.png')}
          style={styles.reactLogo}
        />
      }>
        <ThemedView style={styles.container}>
        <Image
          source={require('@/assets/images/logotrustnet.png')}
          style={styles.image}
        />
        </ThemedView>
      <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">TrustNet</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Registro</ThemedText>
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Nombre de Usuario"
        />
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Correo electronico"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text2}
          placeholder="Contraseña"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text2}
          placeholder="Confirmar Contraseña"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text2}
          placeholder="Telefono"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text2}
          placeholder="Ubicacion"
        />
      </ThemedView>
      <ThemedView style={styles.redondo}>
        <View style={styles.redondo}>
        <Button title="Iniciar Session"
          onPress={() => alert('Iniciar Session')}/>          
        </View>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
           <Link href="/modal">
                <Link.Trigger>
                  <ThemedText type="subtitle">¿Olvidastes tu contraseña?.</ThemedText>
                </Link.Trigger>
                <Link.Preview />
              </Link>
        </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    flexDirection: 'row',
    gap: 8,
  },
   redondo: {
    borderRadius: 15,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
    container: {
    flex: 1,
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center',     // Centra horizontalmente
  },
  image: {
    width: 100,
    height: 100,
  },
  input: {
    backgroundColor: colorScheme === 'dark' ? 'white' : 'black',
    color : colorScheme === 'dark' ? 'black' : 'white',
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 1,
  },
  reactLogo: {
    height: 20,
    width: 20,
    bottom: -20,
    left: 10,
    position: 'absolute',
  },
});
