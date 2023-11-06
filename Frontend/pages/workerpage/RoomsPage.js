import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert, FlatList, TouchableOpacity, Button } from 'react-native';

import SendRound from './functions/SendRound';

export default function RoomsPage ({ navigation, route }) {

	const [ startTime, setStartTime ] = useState(new Date().toISOString().slice(0, 19).replace('T', ' ').slice(11,19));
	const [ roomData, setRoomData ] = useState([
		{ id: 1, name: 'Activities', peopleCount: 0 },
		{ id: 2, name: 'Game Room', peopleCount: 0 },
		{ id: 3, name: 'Second Floor', peopleCount: 0 },
		{ id: 4, name: 'Collab Rooms', peopleCount: 0 },
		{ id: 5, name: 'Prayer Room', peopleCount: 0 },
		{ id: 6, name: 'Media Room', peopleCount: 0 },
		{ id: 7, name: 'Commuter', peopleCount: 0 },
		{ id: 8, name: 'Commons', peopleCount: 0 },
		{ id: 9, name: 'Hive', peopleCount: 0 },
		{ id: 10, name: 'Breakout', peopleCount: 0 },
		{ id: 11, name: 'Great Room', peopleCount: 0 },
		{ id: 12, name: 'Mail', peopleCount: 0 },
		{ id: 13, name: 'Hallways', peopleCount: 0 },
		{ id: 14, name: 'Other', peopleCount: 0 },
	]);

	useEffect(() => {
		navigation.addListener('beforeRemove', (e) => {
			// Find a way to not show the alert when it comes after the user presses finish
			e.preventDefault();

			Alert.alert(
				"Cancel Round?",
				"Your data will not be saved.",
				[
					{ text: "No", style: 'default', onPress: () => {} },
					{ text: "Yes", style:'destructive', onPress: () => navigation.dispatch(e.data.action) }
				]
			)
		})
	}, [navigation]);

	const handlePeopleCountChange = (roomId, newPeopleCount) => {
		setRoomData((prevRoomData) => 
			prevRoomData.map((room) => 
				room.id === roomId ? { ...room, peopleCount: newPeopleCount } : room
			)
		);
	};

	const handleSubmit = () => {
		const { userInfo } = route.params;
		const body = {
			userID: userInfo.userId,
			data: {
				"activities": roomData[0].peopleCount,
        "gameRoom": roomData[1].peopleCount,
        "secondFloor": roomData[2].peopleCount,
        "collabRooms": roomData[3].peopleCount,
        "prayerRoom": roomData[4].peopleCount,
        "mediaRoom": roomData[5].peopleCount,
        "commuter": roomData[6].peopleCount,
        "commons": roomData[7].peopleCount,
        "hive": roomData[8].peopleCount,
        "breakout": roomData[9].peopleCount,
        "greatRoom": roomData[10].peopleCount,
        "mail": roomData[11].peopleCount,
        "hallways": roomData[12].peopleCount,
        "other": roomData[13].peopleCount
			},
			startTime: startTime,
			endTime: new Date().toISOString().slice(0, 19).replace('T', ' ').slice(11,19),
			date: new Date().toISOString().slice(0, 19).replace('T', ' ').slice(0,10),
		}

		Alert.alert(
			"Finish Round?",
			"Make sure all of the data is correctly entered",
			[
				{ text: "No", style: 'destructive', onPress: () => {} },
				{ text: "Yes", style:'default', onPress: async () => {
					const response = await SendRound(body);

					if(response.status === 200) {
						navigation.navigate("Home");
					} else {
						Alert.alert(
							"An Error Occurred",
							"There was an error submitting your round.",
							[
								{ text: "Try Again", style:"default", onPress: () => {} }
							]
						)
					}
				}}
			]
		);
		


	}
    
	return (
		<View style={styles.container}>
			<FlatList
        data={roomData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RoomDetail', {
								data: roomData,
								index: item.id,
                onPeopleCountChange: handlePeopleCountChange,
								handleSubmit: handleSubmit
              })
            }
            style={styles.roomItem}
          >
            {/*<Text>
              {item.name} - {item.peopleCount} People
		</Text>*/}

		
        <View style={{flexDirection:'row'}}>
          <Text style={[styles.textStyle]}> {item.name}</Text>
          <Text style={[styles.textStyle,{textAlign:'right'}]}>{item.peopleCount} People</Text>
        </View>
		
          </TouchableOpacity>
        )}
      />
			<TouchableOpacity
  			style={styles.button}
  			onPress={handleSubmit}
			>
  			<Text style={styles.buttonText}>Finish</Text>
			</TouchableOpacity>

		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  roomItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#AAC9CE',
  },
  button: {
    backgroundColor: '#AAC9CE', 
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#33539E', 
	fontWeight: 'bold',
  },
  cntnr: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle:{
    color:'black', 
    flex:1
  }
});
