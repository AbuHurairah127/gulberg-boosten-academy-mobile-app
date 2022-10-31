import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './FooterStyles';
const Footer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        Created by&nbsp;
        <Text style={{...styles.footerText, fontWeight: 'bold'}}>
          Abu Hurairah
        </Text>
      </Text>
    </View>
  );
};

export default Footer;
