import {Text, TouchableOpacity, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {styles} from './ButtonStyle';
const Button: React.FC<
  PropsWithChildren<{
    label: string;
  }>
> = ({label}) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.button_text}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
