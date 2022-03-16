import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddFriends } from '../screens/AddFriends';
import { FriendsLists } from '../screens/FriendsLists';
import { Login } from '../screens/Login';
import Setting from '../screens/Setting'
export const FriendTab = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Friends" component={FriendsLists} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Profile" component={Setting} />
        </Stack.Navigator>
    )
}