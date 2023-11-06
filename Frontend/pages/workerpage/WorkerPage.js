import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, KeyboardAvoidingView } from 'react-native';

import GetTotal from './functions/GetTotal';

export default function WorkerPage({ navigation, userInfo = {} }) {

	const [totalCount, setTotalCount] = useState(0);
	const Separator = () => <View style={styles.separator} />;
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
			<View style={styles}>
				<Text style={styles.baseText}> Welcome {userInfo.firstname}!</Text>
			</View>

			<View style={[{ alignItems:'center'}]}>

				<Button
					title='Profile'
					onPress={() => navigation.navigate("Profile")}
					
				/>
			</View>
			<Separator />
			<View>
				<Text>
					
				
				</Text>
				
				<Text style={styles.baseText}>Total Count: {totalCount}</Text>
				</View>
				<View style={[{ alignItems:'center'}]}>
				
				<Button
					title='Start Round'
					style={styles.button}
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
		justifyContent: 'center',
    marginHorizontal: 16,
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
		fontSize:30,
		marginVertical: 8,
		textAlign: 'center',
	  },
	  button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10
	  },
	  separator: {
		marginVertical: 8,
		borderBottomColor: '#737373',
		borderBottomWidth: StyleSheet.hairlineWidth,
	  },
})