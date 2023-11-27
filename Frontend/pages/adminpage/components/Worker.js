import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

import DeleteWorker from '../functions/DeleteWorker';

export default function Worker({ data, handleDeleteWorker = () => {} }) {

	const [ activeColor, setActiveColor ] = useState("");

	useEffect(() => {
		init();
	});

	const init = () => {
		setActiveColor(data.isActive ? 'lightgreen': 'lightgray');
	};

	const handleDelete = () => {
		const body = {
			userID: data.userID
		}

		Alert.alert(
			"Delete Worker?",
			"This action cannot be undone.",
			[
				{ text: "No", style: 'default', onPress: () => {} },
				{ text: "Yes", style:'destructive', onPress: async () => {
					const response = await DeleteWorker(body);

					if(response.status === 200) {
						handleDeleteWorker(data.userID);
					} else {
						Alert.alert(
							"An Error Occurred",
							"There was an error deleting this worker.",
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
    <View style={styles.workerContainer}>
			<View style={styles.isActiveContainer}>
				
				<View style={[styles.isActiveIcon, {backgroundColor: activeColor }]}/>
			</View>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{data.firstName} {data.lastName}</Text>
        <Text style={styles.email}>{data.email}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Edit"
            onPress={() => {} }
          />
          <Button
            title="Delete"
            onPress={handleDelete}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  workerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8, 
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  leftContainer: {
    flex: 1,
    marginRight: 16,
  },
  rightContainer: {
    flexDirection: 'column',
  },
	isActiveIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
