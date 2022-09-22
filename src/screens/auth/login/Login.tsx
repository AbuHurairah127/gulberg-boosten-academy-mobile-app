import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
import {styles} from './LoginStyles';
import Button from './../../../components/button/Button';
import useLogin from './useLogin';
const Login: React.FC = () => {
  const {
    passwordAppear,
    setPasswordAppear,
    rollNo,
    setRollNo,
    onRollNoChangeHandler,
    password,
    setPassword,
    onPasswordChangeHandler,
  } = useLogin();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Welcome!</Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <Text style={styles.text_label}>Roll No</Text>
          <View style={styles.input_Container}>
            <Icon name="user-o" size={20} color="white" />
            <TextInput
              style={styles.text_input}
              placeholder="Your Roll No"
              placeholderTextColor="white"
              keyboardType="numeric"
              value={rollNo}
              onChangeText={onRollNoChangeHandler}
            />
          </View>
          <Text style={styles.text_label}>Password</Text>
          <View style={styles.input_Container}>
            <Icon name="lock" size={20} color="white" />
            <TextInput
              style={styles.text_input}
              placeholder="Your Password"
              placeholderTextColor="white"
              secureTextEntry={passwordAppear ? true : false}
              value={password}
              onChangeText={onPasswordChangeHandler}
            />
            {passwordAppear ? (
              <TouchableOpacity onPress={() => setPasswordAppear(false)}>
                <Icon name="eye" size={20} color="grey" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setPasswordAppear(true)}>
                <Icon name="eye-slash" size={20} color="grey" />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.button_container}>
            <Button label="Login" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
