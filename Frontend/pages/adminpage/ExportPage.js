import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, ActivityIndicator, KeyboardAvoidingView } from 'react-native';

import ExportData from './functions/ExportData.js';
import GetRoundsDates from './functions/GetRoundsDates.js';

export default function ExportPage ({ navigation }) {

	const [ email, setEmail ] = useState("");
	const [ currentIssue, setCurrentIssue ] = useState("");
	const [ confirmationMessage, setConfirmationMessage ] = useState("");
	
	const [ earliestRoundDate, setEarliestRoundDate ] = useState("");
	const [ latestRoundDate, setLatestRoundDate ] = useState("");

	const [ loading, setLoading ] = useState(false);
	const [ confirmed, setConfirmed ] = useState(false);

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		const response = await GetRoundsDates();

		if(response.status != null) {
			setEarliestRoundDate(response.earliest);
			setLatestRoundDate(response.latest);
		}
	}

	const handleSubmit = async () => {
		if (!verifyInput()) {
			console.log(currentIssue);
			setConfirmed(false);
			return;
		}

		setCurrentIssue("");
		setLoading(true);

		const body = {
			email: email
		}

		const response = await ExportData(body);
		setLoading(false);

		if (response.status == null) {
			setCurrentIssue("Network Error - Try Again");
			setConfirmed(false);
		} else if (response.status == false) {
			setCurrentIssue("There was an error sending the email");
			setConfirmed(false);
		} else {
			setConfirmationMessage("Successfully sent rounds data to " +  email + "!");
			setConfirmed(true);
		}
	}

	const verifyInput = () => {
		if (email.length < 1) {
			setCurrentIssue("Please Enter Your Email");
			return false;
		}

		if (!email.endsWith("@letu.edu")) {
			setCurrentIssue("Please Enter Your LeTourneau Email");
			return false;
		}

		return true;
	}
    
	return (
		<KeyboardAvoidingView 
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<View style={styles.dateRangeContainer}>
				<Text style={styles.dateRangeContent}>
					There are currently rounds data from {earliestRoundDate} to {latestRoundDate}
				</Text>
			</View>
			
			<View style={styles.descriptionContainer}>
				<Text style={styles.descriptionContent}>
					Enter your email to receive the rounds data in an Excel file.
				</Text>
			</View>
			
			<View style={styles.emailContainer}>
				<TextInput
					style={styles.input}
					placeholder='Email'
					onChangeText={text => setEmail(text)}
					value={email}
				/>
			</View>
			
			<View style={styles.statusContainer}>
				{confirmed  ? 
					(
						<Text style={styles.confirmation}>{confirmationMessage}</Text>
					) : (
							<Text style={styles.issue}>{currentIssue}</Text>
					)
				}
			</View>

			<View style={styles.submitContainer}>
				{loading ?
					(
						<ActivityIndicator size="large" color="blue"/>
					) : (
						<TouchableHighlight
							style={styles.submitButton}
							onPress={handleSubmit}
						>
							<Text style={styles.submitText}>Export</Text>
						</TouchableHighlight>
					)
				}
			</View>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  dateRangeContainer: {
    marginBottom: 20,
  },
  dateRangeContent: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  descriptionContent: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
  },
  emailContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#33539E',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  statusContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  issue: {
    color: 'red',
    fontSize: 16,
  },
  confirmation: {
    color: 'green',
    fontSize: 16,
  },
  submitContainer: {
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#AAC9CE',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitText: {
    color: '#33539E',
    fontSize: 16,
	fontWeight: 'bold',
  },
});