import { Image } from 'expo-image';
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
          <ThemedText type="subtitle">Recuperar Contraseña</ThemedText>
          <ThemedText type="default">Ingresa tu correo elctronico para recuperar tu contraseña </ThemedText>
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Correo electronico"
        />
      </ThemedView>
      <ThemedView style={styles.redondo}>
        <View style={styles.redondo}>
        <Button title="Recuperar"
          onPress={() => alert('Recuperar')}/>          
        </View>
        <ThemedText type="subtitle">Enviaremos un mesaje a tu correo</ThemedText>
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
