import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function AdminPage ({ navigation, userInfo = {} }) {
    
	return(
	<View style={styles.container}>
	<Text style={styles.title}>Admin: Welcome {userInfo.firstname}!</Text>
	<TouchableOpacity
	  style={styles.button}
	  onPress={() => navigation.navigate("Profile")}
	>
	  <Text style={styles.buttonText}>Profile</Text>
	</TouchableOpacity>
	<TouchableOpacity
	  style={styles.button}
	  onPress={() => navigation.navigate("Export")}
	>
	  <Text style={styles.buttonText}>Export Data</Text>
	</TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
},
title: {
  fontSize: 20,
  marginBottom: 20,
},
button: {
  backgroundColor: '#AAC9CE',
  padding: 10,
  borderRadius: 5, 
  marginVertical: 10,
},
buttonText: {
  color: '#33539E', 
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
});