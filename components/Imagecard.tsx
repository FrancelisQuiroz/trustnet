import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function ImageCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://placekitten.com/400/300' }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 20,
    elevation: 3,
    backgroundColor: '#eee',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});