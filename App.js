import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import  {Login} from './screens/Login';
import { Register } from './screens/Register';
import { Home } from './screens/Home';
import { Itinerary } from './screens/Itinerary';
import { Friends } from './screens/Friends';
import { Setting } from './screens/Setting';

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    
    <NativeBaseProvider>
      <Login/>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Itinerary" component={Itinerary} />
        <Tab.Screen name="Friends" component={Friends} />
        <Tab.Screen name="Settings" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  )
}

