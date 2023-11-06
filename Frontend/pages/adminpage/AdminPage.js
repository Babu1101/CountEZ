import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

import Worker from './components/Worker.js';
import GetWorkers from './functions/GetWorkers.js';

export default function AdminPage({ navigation, userInfo = {} }) {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello, {userInfo.firstname}</Text>
        <Button
          title='Profile'
          onPress={() => navigation.navigate("Profile")}
        />
      </View>

      <View style={styles.workersContainer}>
				<Text style={styles.workersHeader}>All AFSC Student Workers</Text>
				<ScrollView style={styles.workersScrollContainer}>
					{workers.map((worker) => {
						return <Worker key={worker.userID} data={worker} />
					})}
				</ScrollView>
			</View>

      <View style={styles.newWorkerButtonContainer}>
				<Button
          title='Export Data'
          onPress={() => navigation.navigate("Export")}
        />
        <Button
          title='New Worker'
          onPress={() => navigation.navigate("NewWorker")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16, 
  },
	headerText: {
		alignSelf: 'center',
	},
	workersContainer: {
		flex: 1,
    backgroundColor: 'white',
	},
  workersHeader: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 20, 
		alignSelf: 'center',
  },
  workersScrollContainer: {
    flex: 1,
    width: '100%',
  },
  newWorkerButtonContainer: {
		flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});