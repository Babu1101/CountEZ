import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function Room({ item = {}, handleCountChange = () => {} }) {

	const [ peopleCount, setPeopleCount ] = useState(item.peopleCount);

	const onChangeInput = (itemId, newCount) => {
		setPeopleCount(newCount);
		handleCountChange(itemId, newCount)
	}

  return (
		<View key={item.id} style={styles.swipePage}>
			<Text>{item.name}</Text>
			<TextInput
				style={styles.input}
				keyboardType="numeric"
				placeholder="Enter a number"
				value={peopleCount.toString() == 0 ? "" : peopleCount.toString()}
				onChangeText={(text) => onChangeInput(item.id, parseInt(text, 10) || 0)}
			/>
		</View>
  );
}

const styles = StyleSheet.create({
  swipePage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
});
