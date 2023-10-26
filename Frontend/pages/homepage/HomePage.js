import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function HomePage ({ navigation }) {
    
    return (
			<View style={styles.container}>
				<Text>Home Page</Text>
				<Button 
					title='Login'
					onPress={() => navigation.navigate("Login")}
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