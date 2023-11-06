import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, KeyboardAvoidingView } from 'react-native';

import GetTotal from './functions/GetTotal';

export default function WorkerPage({ navigation, userInfo = {} }) {

	const [totalCount, setTotalCount] = useState(0);

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
		<KeyboardAvoidingView>
			<View style={styles.baseText}>
				<Text> Welcome {userInfo.firstname}!</Text>
			</View>

			<View style={[{ width: 100, margin: 10 }]}>

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
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	button: {
		alignItems: 'left',
		justifyContent: 'left',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'black',
	},
	baseText: {
		fontFamily: 'Cochin',
		fontSize:40,
	  },
})