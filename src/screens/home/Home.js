import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {userLogout} from '../../store/actions/authActions';
const Home = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={dispatch(userLogout())}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
