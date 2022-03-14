
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailCity } from "../screens/DetailCity";
import { DetailDestination } from '../screens/DetailDestination';
import { Home } from "../screens/Home";
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';

export const HomeTab=()=>{
    const Stack = createNativeStackNavigator();

    return(
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="DetailCity" component={DetailCity} />
                <Stack.Screen name="DetailDestination" component={DetailDestination} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                {/* <Stack.Screen name="Transportation" component={Transportation} />
                <Stack.Screen name="ItineraryVerifikasi" component={ItineraryVerifikasi} /> */}

            </Stack.Navigator>

    )
}