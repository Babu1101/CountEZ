import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LogoutButton({ onLoginStatusChange }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onLoginStatusChange(false, {})}
      >
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#AAC9CE', 
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#33539E',  
    fontWeight: 'bold',
    fontSize: 16,
  },
});
