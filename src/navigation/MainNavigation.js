import React from 'react';
import Home from '../screens/home/Home';
import Login from '../screens/auth/login/Login';
import Profile from '../screens/profile/Profile';
import Result from '../screens/result/Result';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import Attendance from '../screens/attendance/Attendance';
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
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: 'Gulberg Boston Acadmey',
                headerStyle: {
                  backgroundColor: '#1D3557',
                },
                headerTitleStyle: {
                  color: 'white',
                },
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#1D3557',
                },
                headerTintColor: '#FFFFFF',
                headerBackTitleVisible: true,
                headerTitle: 'Profile',
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="Result"
              component={Result}
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#1D3557',
                },
                headerTintColor: '#FFFFFF',
                headerBackTitleVisible: true,
                headerTitle: 'Result',
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="Attendance"
              component={Attendance}
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#1D3557',
                },
                headerTintColor: '#FFFFFF',
                headerBackTitleVisible: true,
                headerTitle: 'Attendance',
                headerTitleAlign: 'center',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <Login />
      )}
    </>
  );
};

export default MainNavigation;
