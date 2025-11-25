import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function BottomNav() {
  return (
    <View style={styles.nav}>
      <TouchableOpacity>
        <Ionicons name="home-outline" size={26} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="people-outline" size={26} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="messenger-outline" size={26} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="user" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
});