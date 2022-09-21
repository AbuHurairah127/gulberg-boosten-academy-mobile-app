import {View, Text} from 'react-native';
import {AppState} from '../store/reducers/rootReducer';
import React from 'react';
import {useSelector} from 'react-redux';
export default function Test() {
  const isAuthenticated: Boolean = useSelector(
    (store: AppState) => store.authReducer.isAuthenticated,
  );
  console.log(
    '🚀 ~ file: Test.js ~ line 9 ~ Test ~ isAuthenticated',
    isAuthenticated,
  );
  return (
    <View>
      <Text></Text>
    </View>
  );
}
