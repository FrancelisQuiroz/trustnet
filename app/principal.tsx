import BottomNav from '@/components/BottomNav';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StyleSheet } from 'react-native';

export default function Principal() {
  return (
     <><ThemedView>
        <ThemedText type="title">Principal</ThemedText>
      </ThemedView>
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
