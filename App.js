import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider, useDispatch} from 'react-redux';
import store from './src/config/store';
import MainNavigation from './src/navigation/MainNavigation';
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
