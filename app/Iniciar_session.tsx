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

export default function HomeScreen() {
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
          <ThemedText type="title">Bienvenidos</ThemedText>
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
    padding: 20,
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
    width: 200,
    height: 200,
  },
  input: {
    backgroundColor: colorScheme === 'dark' ? 'white' : 'black',
    color : colorScheme === 'dark' ? 'black' : 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  reactLogo: {
    height: 50,
    width: 50,
    bottom: -50,
    left: 10,
    position: 'relative',
  },
});
