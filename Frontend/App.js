import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AdminStack, WorkerStack, LoginStack } from './Navigation.js';

const App = () => {

	const [ loginStatus, setLoginStatus ] = useState("");
	const [ userInfo, setUserInfo ] = useState({});

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		const { status, user } = await checkLogin();

		setLoginStatus(status);
		setUserInfo(user);
	}

	const checkLogin = async () => {
		try {
			const userInformation = await AsyncStorage.getItem('user-information');
			return userInformation !== null ? JSON.parse(userInformation) : null;
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	const handleLoginStatusChange = async (status, user) => {
		setLoginStatus(status);
		setUserInfo(user);

		try {
			await AsyncStorage.setItem('user-information', JSON.stringify({status, user}));
		} catch (error) {
			console.log(error);
		}
	}

  return (
    <>
			<NavigationContainer>
				{
					loginStatus == "admin" 
					? ( <AdminStack userInfo={userInfo} onLoginStatusChange={handleLoginStatusChange}/> )
					: ( loginStatus == "worker" 
						?	( <WorkerStack userInfo={userInfo} onLoginStatusChange={handleLoginStatusChange}/>) 
						:	( <LoginStack onLoginStatusChange={handleLoginStatusChange}/>)
					)
				}
			</NavigationContainer>
		</>
  );
}

export default App;