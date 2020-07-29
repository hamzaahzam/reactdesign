import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import AddEntery from './screens/AddEntery';
import SystemName from './screens/SystemName';
import PlanetName from './screens/PlanetName';
import FaunaFlaura from './screens/FaunaFlaura';
import ShipFrighter from './screens/ShipFrighter';

const Stack = createStackNavigator();
  
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="AddEntery" component={AddEntery} />
      <Stack.Screen options={{headerShown: false}} name="SystemName" component={SystemName} />
      <Stack.Screen options={{headerShown: false}} name="PlanetName" component={PlanetName} />
      <Stack.Screen options={{headerShown: false}} name="FaunaFlaura" component={FaunaFlaura} />
      <Stack.Screen options={{headerShown: false}} name="ShipFrighter" component={ShipFrighter} />






      </Stack.Navigator>
    </NavigationContainer>
  );
}