import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import de páginas
import Home from './../pages/Home';
import Foto from './../pages/Foto';
import { Profile } from './../pages/Profile';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Foto" component={Foto} options={{ headerTransparent: true, headerTintColor: '#fff', title: '' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerTransparent: true, headerTintColor: '#fff', title: '' }} />
      </Stack.Navigator>
    </NavigationContainer >
  );

}
