import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import Worker from './components/Worker.js';
import GetWorkers from './functions/GetWorkers.js';

export default function ViewWorkersPage({ navigation }) {
	
	const [workers, setWorkers] = useState([]);

	useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await GetWorkers();

    if (response.status == null) {
      
    } else {
      setWorkers(response.data);
    }
  }

  return (
    <View>
      <View style={styles.workersContainer}>
				<Text style={styles.workersHeader}>All AFSC Student Workers</Text>
				<ScrollView style={styles.workersScrollContainer}>
					{workers.map((worker) => {
						return <Worker key={worker.userID} data={worker} />
					})}
				</ScrollView>
			</View>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("New Worker")}
			>
				<Text style={styles.buttonText}>New Worker</Text>
			</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: 'white',
  },
	workersContainer: {
    backgroundColor: 'white',
	},
	workersHeader: {
    fontSize: 20, 
    marginBottom: 20, 
    marginTop: 20, 
		alignSelf: 'center',
  },
	workersScrollContainer: {
    width: '100%',
  },
	button: {
		backgroundColor: '#AAC9CE',
		padding: 10,
		borderRadius: 5, 
		marginVertical: 10,
	},
	buttonText: {
		color: '#33539E', 
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	}
});