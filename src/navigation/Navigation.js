import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Login from '../screens/auth/login/login';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={<Home />} />
        <Stack.Screen name="Login" component={<Login />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
