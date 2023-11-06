import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import GetTotal from './functions/GetTotal';

export default function WorkerPage({ navigation, userInfo = {} }) {
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    init();
  }, []); 

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
      <TouchableHighlight
        style={styles.button}
        underlayColor="#007aff" 
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableHighlight>
      <Text>Total Count: {totalCount}</Text>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#007aff" 
        onPress={() => navigation.navigate("Rooms", {
          userInfo: userInfo
        })}
      >
        <Text style={styles.buttonText}>Start Round</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#AAC9CE', 
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#33539E', 
    fontWeight: 'bold',
    fontSize: 16,
  },
});
