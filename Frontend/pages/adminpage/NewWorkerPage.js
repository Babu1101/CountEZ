import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function NewWorkerPage({ navigation }) {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleCancel = () => {
    
  };

  const handleCreate = () => {
    
  };

  return (
    <KeyboardAvoidingView 
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>New Worker Page</Text>
      </View>

      <View style={styles.inputContainer}>
				<View style={styles.nameContainer}>
					<TextInput
						style={styles.input}
						placeholder="First Name"
						value={firstName}
						onChangeText={(text) => setFirstName(text)}
					/>
					<TextInput
						style={styles.input}
						placeholder="Last Name"
						value={lastName}
						onChangeText={(text) => setLastName(text)}
					/>
				</View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={handleCancel}
				>
					<Text style={styles.buttonText}>Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={handleCreate}
				>
					<Text style={styles.buttonText}>Create</Text>
				</TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
	nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
		flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
	},
});
