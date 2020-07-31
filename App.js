import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import SystemName from './screens/SystemName';
import PlanetName from './screens/PlanetName';
import FaunaFlaura from './screens/FaunaFlaura';
import ShipFrighter from './screens/ShipFrighter';
import Flora from './screens/Flora';
import Moon from './screens/Moon';
import Frighter from './screens/Frighter';
import {Text} from 'react-native';

const Stack = createStackNavigator();
  
export default function App() {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="SystemName" component={SystemName} />
      <Stack.Screen options={{headerShown: false}} name="PlanetName" component={PlanetName} />
      <Stack.Screen options={{headerShown: false}} name="Moon" component={Moon} />
      <Stack.Screen options={{headerShown: false}} name="FaunaFlaura" component={FaunaFlaura} />
      <Stack.Screen options={{headerShown: false}} name="Flora" component={Flora} />
      <Stack.Screen options={{headerShown: false}} name="ShipFrighter" component={ShipFrighter} />
      <Stack.Screen options={{headerShown: false}} name="Frighter" component={Frighter} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}