import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItineraryForm } from '../screens/ItineraryForm';
import { Itinerary } from '../screens/Itinerary';

export const ItineraryTab = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Itinerary" component={Itinerary} />
            <Stack.Screen name="ItineraryForm" component={ItineraryForm} />
        </Stack.Navigator>
    )
}