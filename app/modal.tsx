import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
               <Image
           source={require('@/assets/images/logotrustnet.png')}
           style={styles.image}
         />
      <ThemedText type="title">Iniciar Session</ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Regresar a Inicio</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  image: {
    width: 200,
    height: 200,
  },
});
