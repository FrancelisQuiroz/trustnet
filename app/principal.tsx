import BottomNav from '@/components/BottomNav';
import SearchBar from '@/components/searchbar';
import { ThemedView } from '@/components/themed-view';
import { Entypo } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet } from 'react-native';

export default function Principal() {
  return (
     <>
     <ScrollView contentContainerStyle={styles.scrollContent}>
      <ThemedView>
          <Entypo name="dots-three-vertical" size={24} color="black" />
          <SearchBar />
          <Image
                  source={require('@/assets/images/imagen1.png')}
                  style={styles.image}
                  resizeMode="cover"
                />
      </ThemedView>
      </ScrollView>
      <BottomNav /> 
    </>
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
   scrollContent: {
    alignItems: 'center',
    paddingBottom: 100, // deja espacio para que el contenido no quede tapado por el BottomNav
  },
  contentContainer: {
    flex: 1,
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
    width: 400,
    height: 400,
  },
  reactLogo: {
    height: 50,
    width: 50,
    bottom: -50,
    left: 10,
    position: 'relative',
  },
});
