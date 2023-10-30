import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import GetTotal from './functions/GetTotal';

export default function WorkerPage ({ navigation, userInfo = {} }) {

	const [ totalCount, setTotalCount ] = useState(0);

	useEffect(() => {
		init();
	}), [];

	const init = async () => {
		try {
			const response = await GetTotal();
			setTotalCount(response);
		} catch (error) {
			console.log(error);
		}
	}
    
	return (
		<View style={styles.container}>
			<Text>Worker: Welcome {userInfo.firstname}!</Text>
			<Button 
				title='Profile'
				onPress={() => navigation.navigate("Profile")}
			/>
			<Text>Total Count: {totalCount}</Text>
			<Button 
				title='Start Round'
				onPress={() => navigation.navigate("Rooms", {
					userInfo: userInfo
				})}
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