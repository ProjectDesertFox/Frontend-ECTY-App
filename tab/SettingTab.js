import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Setting'


export const SettingTab = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}