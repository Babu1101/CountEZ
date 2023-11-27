import React, { useState } from 'react';
import { StyleSheet, Button, View, Text, TextInput, TouchableHighlight, ActivityIndicator, KeyboardAvoidingView, Platform, Image } from 'react-native';
import SendForgotPassword from './functions/SendForgotPassword';

export default function ForgotPassword({ navigation}) {


    const [currentIssue,setCurrentIssue] = useState("");

    const[email, setEmail] = useState("");
    
    const[loading, setLoading] = useState("");


  const handleResetPassword = async () => {


    if (!verifyInput()) {
			console.log(currentIssue);
			return;
		}
    setLoading(true);
    setCurrentIssue("");

    
      const data = {
        email: email,
      };
      
      const response = await SendForgotPassword(data);
      setLoading(false);
      if (response.status == null) {
        setCurrentIssue("Network Error - Try Again");
      } else if (response.status == "invalid") {
        setCurrentIssue("This user's email doesn't exist");
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

		return true;
	}


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >


            <View style={styles.emailContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
            </View>



            <View style={styles.issueContainer}>
                <Text style={styles.issue}>{currentIssue}</Text>
            </View>

            <View style={styles.submitContainer}>
                {loading ?
                    (
                        <ActivityIndicator size="large" color="blue" />
                    ) : (
                        <TouchableHighlight
                            style={styles.submitButton}
                            onPress={handleResetPassword}
                        >
                            <Text style={styles.submitText}>Reset Password</Text>
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

})