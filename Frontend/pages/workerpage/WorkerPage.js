import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function WorkerPage ({ navigation, userInfo = {} }) {
    
	return (
		<View style={styles.container}>
			<Text>Worker: Welcome {userInfo.firstname}!</Text>
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