/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/config/store';
import MainNavigation from './src/navigation/MainNavigation';
import Login from './src/screens/auth/login/Login';
import Home from './src/screens/home/Home';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <MainNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
