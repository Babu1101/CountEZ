import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function WorkerPage ({ navigation }) {
    
	return (
		<View style={styles.container}>
			<Button 
				title='Profile'
				onPress={() => navigation.navigate("Profile")}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
})