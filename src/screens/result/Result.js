import {View, FlatList, Text} from 'react-native';
import React from 'react';
import ResultCard from '../../components/resultCard/ResultCard';
import {styles} from './ResultStyles';
import useResult from './useResult';
const Result = () => {
  const {marks} = useResult();
  console.log('🚀 ~ file: Result.js ~ line 8 ~ Result ~ marks', marks);
  return (
    <View style={styles.cardContainer}>
      {marks.length === 0 ? (
        <View style={styles.noResultContainer}>
          {console.log(true)}
          <Text style={styles.noResultText}>
            No result has uploaded on the portal.
          </Text>
        </View>
      ) : (
        <FlatList
          data={marks}
          renderItem={({item, index}) => (
            <ResultCard marks={item} listKey={index} />
          )}
          keyExtractor={index => index}
        />
      )}
    </View>
  );
};

export default Result;
