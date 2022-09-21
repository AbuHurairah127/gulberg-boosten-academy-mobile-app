import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/config/store';
import Login from './src/screens/auth/login/Login';
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Login />
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
