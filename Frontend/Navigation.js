import { createStackNavigator } from '@react-navigation/stack';

// Stack Pages
import LoginPage from './pages/loginpage/LoginPage.js';
import HomePage from './pages/homepage/HomePage.js';

const Stack = createStackNavigator();

export const FinalStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Login"
				component={LoginPage}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: 'blue' },
				}}
			/>
			<Stack.Screen
				name="Home"
				component={HomePage}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: 'blue' },
				}}
			/>
		</Stack.Navigator>
	)
}