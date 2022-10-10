import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './FooterStyles';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Footer</Text>
    </View>
  );
};

export default Footer;
