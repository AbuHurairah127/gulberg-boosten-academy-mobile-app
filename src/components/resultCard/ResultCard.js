import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './ResultCardStyles';

const ResultCard = ({item}) => {
  console.log(item, 'item');
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>Test No. {item.testNo}</Text>
      </View>
    </View>
  );
};

export default ResultCard;
