import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './ResultCardStyles';
import useResultCard from './useResultCard';

const ResultCard = ({marks, listKey}) => {
  const {cUserSubjects} = useResultCard();
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>Test No. {marks.testNo}</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.leftSection}>
          <FlatList
            style={styles.cardBodyLeft}
            data={cUserSubjects}
            renderItem={({item}) => (
              <Text style={styles.cardBodyLeftText}>{item}</Text>
            )}
            keyExtractor={index => index}
          />
        </View>
        <View style={styles.rightSection}>
          <FlatList
            style={styles.cardBodyRight}
            data={cUserSubjects}
            renderItem={({item}) => (
              <Text>{`${marks.obtainedMarks[item]}/${marks.totalMarks[item]}`}</Text>
            )}
            keyExtractor={index => index}
          />
        </View>
      </View>
    </View>
  );
};

export default ResultCard;
