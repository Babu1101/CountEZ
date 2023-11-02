import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function AdminPage ({ navigation, userInfo = {} }) {
    
	return (
		<View style={styles.container}>
			<Text>Admin: Welcome {userInfo.firstname}!</Text>
			<Button 
				title='Profile'
				onPress={() => navigation.navigate("Profile")}
			/>
			<Button 
				title='Export Data'
				onPress={() => navigation.navigate("Export")}
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