import { createStackNavigator } from '@react-navigation/stack';

// Stack Pages
import AdminPage from './pages/adminpage/AdminPage.js';
import ExportPage from './pages/adminpage/ExportPage.js';

import WorkerPage from './pages/workerpage/WorkerPage.js';
import RoomsPage from './pages/workerpage/RoomsPage.js';
import RoomDetail from './pages/workerpage/RoomDetail.js';
import ProfilePage from './pages/profilepage/ProfilePage.js';
import LoginPage from './pages/loginpage/LoginPage.js';

const Stack = createStackNavigator();

const AdminStack = ({ userInfo = {}, onLoginStatusChange = () => {}}) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Admin"
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: 'blue' },
				}}
			>
				{(props) => <AdminPage {...props} userInfo={userInfo} />}
			</Stack.Screen>
			<Stack.Screen
				name="Export"
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: 'blue' },
				}}
			>
				{(props) => <ExportPage {...props} />}
			</Stack.Screen>
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

const WorkerStack = ({ userInfo = {}, onLoginStatusChange = () => {}}) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: 'blue' },
				}}
			>
				{(props) => <WorkerPage {...props} userInfo={userInfo} />}
			</Stack.Screen>
			<Stack.Screen
				name="Profile"
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: 'blue' },
				}}
			>
				{(props) => <ProfilePage {...props} onLoginStatusChange={onLoginStatusChange} />}
			</Stack.Screen>
			<Stack.Screen
				name="Rooms"
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: 'blue' },
				}}
			>
				{(props) => <RoomsPage {...props} />}
			</Stack.Screen>
			<Stack.Screen
				name="RoomDetail"
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: 'blue' },
				}}
			>
				{(props) => <RoomDetail {...props} />}
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