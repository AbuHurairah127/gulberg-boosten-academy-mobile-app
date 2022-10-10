import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {userLogout} from '../../store/actions/authActions';
import {styles} from './HomeStyles';
import Footer from '../../components/footer/Footer';
import Icon from 'react-native-vector-icons/dist/Foundation';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
const Home = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.upperSectionContainer}>
        <View style={styles.LeftSection}>
          <Icon name="results" color="white" size={50} />
          <Text style={styles.label}>Result</Text>
        </View>
        <View style={styles.RightSection}>
          <Icon name="graph-pie" color="white" size={50} />
          <Text style={styles.label}>Attendance</Text>
        </View>
      </View>
      <View style={styles.lowerSectionContainer}>
        <View style={styles.LeftSection}>
          <Fontisto name="wallet" color="white" size={50} />
          <Text style={styles.label}>Fees</Text>
        </View>
        <View style={styles.RightSection}>
          <Ionicons name="person" color="white" size={50} />
          <Text style={styles.label}>Profile</Text>
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default Home;
