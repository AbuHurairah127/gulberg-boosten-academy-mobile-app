import {Text, View, Image, KeyboardAvoidingView, TextInput} from 'react-native';
import React from 'react';
import {styles} from './LoginStyles';
const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Welcome!</Text>
      </View>
      <View style={styles.body}>{/* <Text>Body</Text> */}</View>
    </View>
  );
};

export default Login;
