import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItineraryForm } from '../screens/ItineraryForm';
import { Itinerary } from '../screens/Itinerary';
import { Destination } from '../screens/DestinationForm';
import { BudgetCalculation } from '../screens/BudgetCalculation';

export const ItineraryTab = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Itinerary" component={Itinerary} />
            <Stack.Screen name="ItineraryForm" component={ItineraryForm} />
            <Stack.Screen name="Destination" component={Destination} />
            <Stack.Screen name="BudgetCalculation" component={BudgetCalculation} />
        </Stack.Navigator>
    )
}