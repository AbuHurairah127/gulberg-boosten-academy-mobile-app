import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/config/store';
import Toast from 'react-native-toast-message';
import MainNavigation from './src/navigation/MainNavigation';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <MainNavigation />
      </SafeAreaView>
      <Toast />
    </Provider>
  );
};

export default App;
