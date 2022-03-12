import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './screens/Login';
import { Register } from './screens/Register';
import { Home } from './screens/Home';
import { Itinerary } from './screens/Itinerary';
import { Friends } from './screens/Friends';
import Setting from './screens/Setting';
import store from './store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import { Icon } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DetailCity } from './screens/DetailCity';
import { DetailDestination } from './screens/DetailDestination';
// import { ItineraryVerifikasi } from './screens/ItineraryVerification';
// import { Transportation } from './screens/Transportation';
// import BudgetCalculation from './screens/BudgetCalculation';
import PremiumUser from './screens/PremiumUser';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          {/* <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Tes" component={Tes} />
            <Stack.Screen name="DetailCity" component={DetailCity} />
          </Stack.Navigator> */}
          <Tab.Navigator tabBarOptions={{ activeTintColor: '#00CEC9' }}>
            <Tab.Screen name="Premium" component={PremiumUser} />
            {/* <Tab.Screen name="DetailCity" component={DetailCity} /> */}
            {/* <Tab.Screen name="Transportation" component={Transportation} />
            <Tab.Screen name="ItineraryVerifikasi" component={ItineraryVerifikasi} /> */}
            <Tab.Screen name="Destination" component={DetailDestination} options={{
              headerShown: true,
              tabBarIcon: (props) => (
                <Icon type='feather' name='at-sign' color={props.color} />
              ),
            }} />
            <Tab.Screen name="Home" component={Home} options={{
              headerShown: true,
              tabBarIcon: (props) => (
                <Icon type='feather' name='home' color={props.color} />
              ),
            }} />
            <Tab.Screen name="Itinerary" component={Itinerary} options={{
              headerShown: true,
              tabBarIcon: (props) => (
                <Icon type='feather' name='check-circle' color={props.color} />
              ),
            }} />
            <Tab.Screen name="Friends" component={Friends} options={{
              headerShown: true,
              tabBarIcon: (props) => (
                <Icon type='feather' name='user' color={props.color} />
              ),
            }} />
            <Tab.Screen name="Settings" component={Setting} options={{
              headerShown: true,
              title: 'Settings',
              tabBarIcon: (props) => (
                <Icon type='feather' name='settings' color={props.color} />
              ),
            }} />
            <Tab.Screen name="Register" component={Register} options={{
              headerShown: false,
              title: 'Register',
              tabBarIcon: (props) => (
                <Icon type='feather' name='log-in' color={props.color} />
              ),
            }} />
            <Tab.Screen name="Login" component={Login} options={{
              headerShown: false,
              title: 'Login',
              tabBarIcon: (props) => (
                <Icon type='feather' name='log-in' color={props.color} />
              ),
            }} />

          </Tab.Navigator>
        </NavigationContainer>

      </NativeBaseProvider>
    </Provider>
  )
}

