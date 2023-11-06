import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Worker({ data }) {
  return (
    <View style={styles.workerContainer}>
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
            title="Remove"
            onPress={() => {} }
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
