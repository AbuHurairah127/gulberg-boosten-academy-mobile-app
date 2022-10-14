import {View} from 'react-native';
import React from 'react';
import {styles} from './AttendanceStyles';
import {PieChart} from 'react-native-svg-charts';
import useAttendance from './useAttendance';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Attendance = () => {
  const {presents, absents, totalDays} = useAttendance();
  const data = [presents, absents];

  const COLORS = ['#28a264', '#dc3b37'];

  const pieData = data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: COLORS[index % COLORS.length],
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }));
  return (
    <View style={styles.container}>
      <View style={styles.graphContainer}>
        <PieChart style={{height: 200}} data={pieData} />
      </View>
      <View style={styles.detailsContainer}></View>
    </View>
  );
};

export default Attendance;
