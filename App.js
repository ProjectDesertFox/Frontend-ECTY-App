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
import { Provider, useSelector } from 'react-redux'
import { Icon } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DetailCity } from './screens/DetailCity';
import { DetailDestination } from './screens/DetailDestination';
import { ItineraryVerifikasi } from './screens/ItineraryVerification';
import { Transportation } from './screens/Transportation';
import { ItineraryTab } from './tab/ItineraryTab';
import { HomeTab } from './tab/HomeTab';
import { getAccessToken } from './store/actions/userActions';
import { useEffect } from 'react';
import { SettingTab } from './tab/SettingTab';
import { Destination } from './screens/Destination';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  // let statusLogin = useSelector(state=>state.user.statusLogin)
  // console.log(statusLogin)
  useEffect(() => {
    getAccessToken
  }, [getAccessToken])
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator tabBarOptions={{ activeTintColor: '#00CEC9' }}>
            <Tab.Screen name="HomeTab" component={HomeTab} options={{
              headerShown: false,
              tabBarIcon: (props) => (
                <Icon type='feather' name='home' color={props.color} />
              ),
              title: 'Home'
            }} />
            {/* {
                statusLogin ?
                <> */}
            <Tab.Screen name="ItineraryTab" component={ItineraryTab} options={{
              headerShown: false,
              tabBarIcon: (props) => (
                <Icon type='feather' name='check-circle' color={props.color} />
              ),
              title: 'Itinerary'
            }} />

            <Tab.Screen name="Friends" component={Friends} options={{
              headerShown: true,
              tabBarIcon: (props) => (
                <Icon type='feather' name='user' color={props.color} />
              )
            }} />
            {/* </>
                :
                null

              } */}
              <Tab.Screen name="SettingTab" component={SettingTab} options={{
                headerShown: false,
                title: 'Setting',
                tabBarIcon: (props) => (
                  <Icon type='feather' name='settings' color={props.color} />
                )
              }} />
              {/* <Tab.Screen name="Destination" component={Destination} options={{
                headerShown: true,
                title: 'Destination',
                tabBarIcon: (props) => (
                  <Icon type='feather' name='settings' color={props.color} />
                )
              }} />
              <Tab.Screen name="Transportasi" component={Transportation} options={{
                headerShown: true,
                title: 'Transpotasi',
                tabBarIcon: (props) => (
                  <Icon type='feather' name='settings' color={props.color} />
                )
              }} /> */}

          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  )
}

