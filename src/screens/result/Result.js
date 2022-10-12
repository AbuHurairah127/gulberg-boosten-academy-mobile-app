import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ResultCard from '../../components/resultCard/ResultCard';
import {styles} from './ResultStyles';
import useResult from './useResult';
const Result = () => {
  const {marks} = useResult();
  console.log('🚀 ~ file: Result.js ~ line 8 ~ Result ~ marks', marks);
  return (
    <View style={styles.cardContainer}>
      <FlatList
        data={marks}
        renderItem={({item, index}) => <ResultCard item={item} />}
        keyExtractor={item => item.testNo}
      />
    </View>
  );
};

export default Result;
