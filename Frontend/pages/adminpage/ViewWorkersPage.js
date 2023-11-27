import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';

import Worker from './components/Worker.js';
import GetWorkers from './functions/GetWorkers.js';

export default function ViewWorkersPage({ navigation }) {
	
	const [ loading, setLoading ] = useState(false);
	const [ workers, setWorkers ] = useState([]);

	useEffect(() => {
    init();
  }, []);

  const init = async () => {
		setLoading(true);

    const response = await GetWorkers();

    if (response.status == null) {
      
    } else {
			const sortedWorkers = response.data.sort((a, b) => (a.isActive < b.isActive) ? 1 : ((a.lastName > b.lastName) ? 1 : -1));
      setWorkers(sortedWorkers);
    }

		setLoading(false);
  };

	const handleDeleteWorker = (userID) => {
		setLoading(true);
		
		const updatedWorkers = workers.filter(worker => worker.userID !== userID);
    setWorkers(updatedWorkers);
		
		setLoading(false);
	}

  return (
    <View style={styles.container}>
      <View style={styles.workersContainer}>
				<Text style={styles.workersHeader}>All AFSC Student Workers</Text>
				{ loading 
				?
					<ActivityIndicator style={styles.workersScrollContainer} size="large" color="blue" />
				:
					<ScrollView 
						style={styles.workersScrollContainer}
						contentContainerStyle={styles.scrollContentContainer}
						showsVerticalScrollIndicator={false}
					>
						{workers.map((worker) => {
							return <Worker key={worker.userID} data={worker} handleDeleteWorker={handleDeleteWorker} />
						})}
					</ScrollView>
				}
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
		flex: 1,
    backgroundColor: 'white',
	},
	workersHeader: {
    fontSize: 20, 
    marginBottom: 20, 
    marginTop: 20, 
		alignSelf: 'center',
  },
	workersScrollContainer: {
		flex: 1,
    width: '100%',
  },
	scrollContentContainer: {
    paddingBottom: 50,
  },
	button: {
		position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
		backgroundColor: '#AAC9CE',
		padding: 15,

	},
	buttonText: {
		color: '#33539E', 
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	}
});