import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './ResultCardStyles';
import useResultCard from './useResultCard';

const ResultCard = ({item}) => {
  const {cUserSubjects} = useResultCard();
  console.log(
    '🚀 ~ file: resultCard.js ~ line 8 ~ ResultCard ~ cUserSubjects',
    cUserSubjects,
  );
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>Test No. {item.testNo}</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.leftSection}>
          <FlatList
            data={cUserSubjects}
            renderItem={({item, index}) => <Text>{item}</Text>}
            keyExtractor={index => index}
          />
        </View>
        <View style={styles.leftSection}>
          <FlatList
            data={cUserSubjects}
            renderItem={({item, index}) => <Text>{item}</Text>}
            keyExtractor={index => index}
          />
        </View>
      </View>
    </View>
  );
};

export default ResultCard;
