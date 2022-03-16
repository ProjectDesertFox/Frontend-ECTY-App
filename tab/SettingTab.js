import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { PremiumUser } from '../screens/PremiumUser';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setting from '../screens/Setting'


export const SettingTab = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Setting} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="PremiumUser" component={PremiumUser} />
        </Stack.Navigator>
    )
}