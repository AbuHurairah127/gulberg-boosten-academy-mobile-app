import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './ButtonStyle';
const Button = ({label, event}) => {
  return (
    <View>
      <TouchableOpacity onPress={event}>
        <View style={styles.container}>
          <Text style={styles.button_text}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
