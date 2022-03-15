import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddFriends } from '../screens/AddFriends';
import { FriendsLists } from '../screens/FriendsLists';


export const FriendTab = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="FriendsLists" component={FriendsLists} />
            <Stack.Screen name="AddFriends" component={AddFriends} />
        </Stack.Navigator>
    )
}