import { createStackNavigator } from '@react-navigation/stack';

// Stack Pages
import AdminPage from './pages/adminpage/AdminPage.js';
import ExportPage from './pages/adminpage/ExportPage.js';
import NewWorkerPage from './pages/adminpage/NewWorkerPage.js';
import ViewWorkersPage from './pages/adminpage/ViewWorkersPage.js';

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
					headerTintColor: '#33539E',
					headerStyle: { backgroundColor: '#AAC9CE' },
				}}
			>
				{(props) => <AdminPage {...props} userInfo={userInfo} />}
			</Stack.Screen>
			<Stack.Screen
				name="Export"
				options={{
					headerTintColor: '#33539E',
					headerStyle: { backgroundColor: '#AAC9CE' },
				}}
			>
				{(props) => <ExportPage {...props} />}
			</Stack.Screen>
			<Stack.Screen
				name="Workers"
				options={{
					headerTintColor: '#33539E',
					headerStyle: { backgroundColor: '#AAC9CE' },
				}}
			>
				{(props) => <ViewWorkersPage {...props} />}
			</Stack.Screen>
			<Stack.Screen
				name="New Worker"
				options={{
					headerTintColor: '#33539E',
					headerStyle: { backgroundColor: '#AAC9CE' },
				}}
			>
				{(props) => <NewWorkerPage {...props} />}
			</Stack.Screen>
			<Stack.Screen
				name="Profile"
				options={{
					headerTintColor: '#33539E',
					headerStyle: { backgroundColor: '#AAC9CE' },
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
					fontWeight: 'bold',
					headerTintColor: '#33539E',
					headerStyle: { backgroundColor: '#AAC9CE' },
				}}
			>
				{(props) => <WorkerPage {...props} userInfo={userInfo} />}
			</Stack.Screen>
			<Stack.Screen
				name="Profile"
				options={{
					headerTintColor: '#33539E',
					headerStyle: { backgroundColor: '#AAC9CE' },
				}}
			>
				{(props) => <ProfilePage {...props} onLoginStatusChange={onLoginStatusChange} />}
			</Stack.Screen>
			<Stack.Screen
				name="Rooms"
				options={{
					headerTintColor: '#33539E',
					headerStyle: { backgroundColor: '#AAC9CE' },
				}}
			>
				{(props) => <RoomsPage {...props} />}
			</Stack.Screen>
			<Stack.Screen
				name="RoomDetail"
				options={{
					headerTintColor: '#33539E',
					headerStyle: { backgroundColor: '#AAC9CE' },
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
					headerTintColor: '#33539E',
					headerStyle: { backgroundColor: '#AAC9CE' },
				}}
			>
				{(props) => <LoginPage {...props} onLoginStatusChange={onLoginStatusChange} />}
			</Stack.Screen>
		</Stack.Navigator>
	)
}


export { AdminStack, WorkerStack, LoginStack };