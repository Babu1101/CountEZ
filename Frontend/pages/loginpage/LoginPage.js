import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, ActivityIndicator, KeyboardAvoidingView, Platform, Image } from 'react-native';

import SendLogin from './functions/SendLogin.js';

export default function LoginPage({ navigation, onLoginStatusChange = () => { } }) {

	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");
	const [ currentIssue, setCurrentIssue ] = useState("");
	const [ loading, setLoading ] = useState("");

	const handleLogin = async () => {
		if (!verifyInput()) {
			console.log(currentIssue);
			return;
		}

		setCurrentIssue("");
		setLoading(true);

		const body = {
			email: email,
			password: password
		}

		const response = await SendLogin(body);
		onLoginStatusChange(response.status, response.user);
		setLoading(false);

		if (response.status == null) {
			setCurrentIssue("Network Error - Try Again");
		} else if (response.status == "invalid") {
			setCurrentIssue("Invalid Credentials");
		} else if (response.status == "inactive") {
			setCurrentIssue("This User Is Currently Inactive");
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

		if (password.length < 1) {
			setCurrentIssue("Please Enter Your Password");
			return false;
		}

		return true;
	}

	return (
		<KeyboardAvoidingView 
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			{/* <View style={styles.logoContainer}>
				<Image 
					// CHANGE THIS TO OUR ACTUAL LOGO
					source={require("../../assets/icon.png")}
					style={styles.logo}
				/>
			</View> */}
			
			<View style={styles.emailContainer}>
				<TextInput
					style={styles.input}
					placeholder='Email'
					onChangeText={text => setEmail(text)}
					value={email}
				/>
			</View>

			<View style={styles.passwordContainer}>
				<TextInput
					style={styles.input}
					placeholder='Password'
					onChangeText={text => setPassword(text)}
					secureTextEntry={true}
					value={password}
				/>
			</View>

			<View style={styles.issueContainer}>
				<Text style={styles.issue}>{currentIssue}</Text>
			</View>

			<View style={styles.submitContainer}>
				{loading ?
					(
						<ActivityIndicator size="large" color="blue"/>
					) : (
						<TouchableHighlight
							style={styles.submitButton}
							onPress={handleLogin}
						>
							<Text style={styles.submitText}>Login</Text>
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
  },
	logoContainer: {
		width: '80%',
		height: '20%',
		alignItems: 'center',
		marginBottom: 50,
		backgroundColor: 'red'
	},
	logo: {
		width: '100%',
		height: '100%',
	},
  emailContainer: {
    width: '80%',
  },
  passwordContainer: {
    width: '80%',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#33539E',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  issueContainer: {
    marginTop: 10,
  },
  issue: {
    color: 'red',
  },
  submitContainer: {
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#AAC9CE',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
		width: 200
  },
  submitText: {
    color: '#33539E',
  },
});
