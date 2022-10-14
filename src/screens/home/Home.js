import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './HomeStyles';
import Footer from '../../components/footer/Footer';
import Icon from 'react-native-vector-icons/dist/Foundation';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperSectionContainer}>
        <View style={styles.LeftSection}>
          <TouchableOpacity
            style={styles.touchAble}
            onPress={() => navigation.navigate('Result')}>
            <Icon name="results" color="white" size={50} />
            <Text style={styles.label}>Result</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RightSection}>
          <TouchableOpacity
            style={styles.touchAble}
            onPress={() => navigation.navigate('Attendance')}>
            <Icon name="graph-pie" color="white" size={50} />
            <Text style={styles.label}>Attendance</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lowerSectionContainer}>
        <View style={styles.LeftSection}>
          <Fontisto name="wallet" color="white" size={50} />
          <Text style={styles.label}>Fees</Text>
        </View>
        <View style={styles.RightSection}>
          <TouchableOpacity
            style={styles.touchAble}
            onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person" color="white" size={50} />
            <Text style={styles.label}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Home;
