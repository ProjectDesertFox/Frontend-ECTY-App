import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
// import  {Login} from './screens/Login';
// import { Register } from './screens/Register';
import { Home } from './screens/Home';
import { Itinerary } from './screens/Itinerary';
import { Friends } from './screens/Friends';
import { Setting } from './screens/Setting';

import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <NativeBaseProvider>
      {/* <Login/> */}
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{activeTintColor : '#00CEC9'}}>
          <Tab.Screen name="Home" component={Home} options={{
            headerShown: true,
            tabBarIcon: (props) => (
              <Icon type='feather' name='home' color={props.color}/>
            ),
          }} />
          <Tab.Screen name="Itinerary" component={Itinerary} options={{
            headerShown: true,
            tabBarIcon: (props) => (
              <Icon type='feather' name='check-circle' color={props.color} />
            ),
          }}/>
          <Tab.Screen name="Friends" component={Friends} options={{
            headerShown: true,
            tabBarIcon: (props) => (
              <Icon type='feather' name='user'color={props.color} />
            ),
          }} />
          <Tab.Screen name="Settings" component={Setting} options={{
            headerShown: true,
            tabBarIcon: (props) => (
              <Icon type='feather' name='settings' color={props.color} />
            ),
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

