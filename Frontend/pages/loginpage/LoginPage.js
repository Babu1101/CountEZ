import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function LoginPage ({ navigation }) {
    
    return (
			<View style={styles.container}>
				<Text>Login Page</Text>
				<Button 
					title='Home'
					onPress={() => navigation.navigate("Home")}
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