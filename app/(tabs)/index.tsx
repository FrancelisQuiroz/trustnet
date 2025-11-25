import { Image } from 'expo-image';
import { Button, StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

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
        <View style={styles.redondo}>
                <Button title="Iniciar Session"
                  onPress={() => alert('Iniciar Session')}/>          
                </View>
        <Link href="/registrarse">
          <Link.Trigger>
            <ThemedText style={styles.stepContainer} type="subtitle">¿No tienes una cuenta?. Registrate aquí</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
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
  reactLogo: {
    height: 50,
    width: 50,
    bottom: -50,
    left: 10,
    position: 'relative',
  },
});
