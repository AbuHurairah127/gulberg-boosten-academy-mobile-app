import {View, Text} from 'react-native';
import React from 'react';
import ResultCard from '../../components/resultCard/ResultCard';
import {styles} from './ResultStyles';
const Result = () => {
  return (
    <View style={styles.container}>
      <ResultCard />
    </View>
  );
};

export default Result;
