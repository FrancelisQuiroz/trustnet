import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#666" />
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        placeholderTextColor="#999"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '90%',
    height: 45,
    marginTop: 10,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
});