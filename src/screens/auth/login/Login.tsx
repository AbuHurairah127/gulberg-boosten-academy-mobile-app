import {ScrollView, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {styles} from './LoginStyles';
const Login: React.FC = () => {
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
            />
          </View>
          <Text style={styles.text_label}>Password</Text>
          <View style={styles.input_Container}>
            <Icon name="lock" size={20} color="white" />
            <TextInput
              style={styles.text_input}
              placeholder="Your Password"
              placeholderTextColor="white"
            />
            <Icon name="eye" size={20} color="grey" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
