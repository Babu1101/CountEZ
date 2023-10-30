import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function ProfilePage ({ navigation, onLoginStatusChange = () => {} }) {
    
	return (
		<View style={styles.container}>
			<Button 
				title='Log out'
				onPress={() => onLoginStatusChange(false, {})}
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