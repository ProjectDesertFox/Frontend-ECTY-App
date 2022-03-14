import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './screens/Login';
import { Home } from './screens/Home';
import { DetailCity } from './screens/DetailCity';
import { DetailDestination } from './screens/DetailDestination';
import { Register } from './screens/Register';
import { Setting } from './screens/Setting';
import { Itinerary } from './screens/Itinerary';
import { ItineraryForm } from './screens/ItineraryForm';
import { IteneraryInviteFriends } from './screens/IteneraryInviteFriends';


const Stack = createNativeStackNavigator()

const SettingNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}
const ItineraryNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Itinerary" component={Itinerary} />
            <Stack.Screen name="ItineraryForm" component={ItineraryForm} />
            <Stack.Screen name="ItineraryFriend" component={IteneraryInviteFriends} />
        </Stack.Navigator>
    )
}
const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DetailCity" component={DetailCity} />
            <Stack.Screen name="DetailDestination" component={DetailDestination} />
        </Stack.Navigator>
    )
}

export { SettingNavigator, ItineraryNavigator, HomeNavigator }
