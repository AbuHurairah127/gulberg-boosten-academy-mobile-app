import React from 'react';
import Home from '../screens/home/Home';
import Login from '../screens/auth/login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  const isAuthenticated = useSelector(
    store => store.authReducer.isAuthenticated,
  );
  return (
    <>
      {isAuthenticated ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <Login />
      )}
    </>
  );
};

export default MainNavigation;
