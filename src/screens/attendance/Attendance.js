import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './AttendanceStyles';
import {PieChart} from 'react-native-svg-charts';
import useAttendance from './useAttendance';
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
        {presents === 0 && absents === 0 ? (
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              padding: 5,
            }}>
            No attendance uploaded
          </Text>
        ) : (
          <>
            <PieChart style={{height: 200}} data={pieData} />
            <View style={styles.attendanceInfoContainer}>
              <View style={styles.singleInfoContainer}>
                <View
                  style={{
                    ...styles.labelColor,
                    backgroundColor: COLORS[0],
                  }}></View>
                <Text>{parseInt((presents / totalDays) * 100)}% Presents</Text>
              </View>
              <View style={styles.singleInfoContainer}>
                <View
                  style={{
                    ...styles.labelColor,
                    backgroundColor: COLORS[1],
                  }}></View>
                <Text>{parseInt((absents / totalDays) * 100)}% Absents</Text>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
};
export default Attendance;
