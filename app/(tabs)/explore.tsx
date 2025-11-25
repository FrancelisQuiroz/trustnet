import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Menu
        </ThemedText>
      </ThemedView>
      <ThemedText>Menu principal de la aplicacion.</ThemedText>
      <ThemedText><IconSymbol size={28} name="house.fill" color="black" />Cambiar Contraseña</ThemedText>
      <ThemedText><IconSymbol size={28} name="house.fill" color="black" />Favoritos</ThemedText>
      <ThemedText><IconSymbol size={28} name="house.fill" color="black" />Cerrar Sesión</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  defecto:{
    color: '#808080',
    position: 'relative',
  }
});
