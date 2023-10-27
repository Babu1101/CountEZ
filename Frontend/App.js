import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AdminStack, WorkerStack, LoginStack } from './Navigation.js';

const App = () => {

	const [ loginStatus, setLoginStatus ] = useState("");
	const [ userInfo, setUserInfo ] = useState({});

	useEffect(() => {
		// Check local storage for login info
		const status = false;
		const user = {};

		handleLoginStatusChange(status, user);
	}, []);

	const handleLoginStatusChange = (status, user) => {
		setLoginStatus(status);
		setUserInfo(user);
	}

  return (
    <>
			<NavigationContainer>
				{
					loginStatus == "admin" 
					? ( <AdminStack /> )
					: ( loginStatus == "worker" 
						?	( <WorkerStack onLoginStatusChange={handleLoginStatusChange}/>) 
						:	( <LoginStack onLoginStatusChange={handleLoginStatusChange}/>)
					)
				}
			</NavigationContainer>
		</>
  );
}

export default App;