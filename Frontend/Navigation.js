import { createStackNavigator } from '@react-navigation/stack';

// Stack Pages
import AdminPage from './pages/adminpage/AdminPage.js';
import WorkerPage from './pages/workerpage/WorkerPage.js';
import ProfilePage from './pages/profilepage/ProfilePage.js';
import LoginPage from './pages/loginpage/LoginPage.js';

const Stack = createStackNavigator();

const AdminStack = ({ onLoginStatusChange = () => {}}) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Admin"
				component={AdminPage}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: 'blue' },
				}}
			/>
		</Stack.Navigator>
	)
}

const WorkerStack = ({ onLoginStatusChange = () => {}}) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={WorkerPage}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: 'blue' },
				}}
			/>
			<Stack.Screen
				name="Profile"
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: 'blue' },
				}}
			>
				{(props) => <ProfilePage {...props} onLoginStatusChange={onLoginStatusChange} />}
			</Stack.Screen>
		</Stack.Navigator>
	)
}

const LoginStack = ({ onLoginStatusChange = () => {} }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Login"
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: 'blue' },
				}}
			>
				{(props) => <LoginPage {...props} onLoginStatusChange={onLoginStatusChange} />}
			</Stack.Screen>
		</Stack.Navigator>
	)
}

export { AdminStack, WorkerStack, LoginStack };