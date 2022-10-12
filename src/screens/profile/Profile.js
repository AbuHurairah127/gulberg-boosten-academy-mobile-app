import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './ProfileStyles';
import useProfile from './useProfile';
import Button from '../../components/button/Button';
const Profile = () => {
  const {onLogoutHandler, cUser} = useProfile();
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <View style={styles.imageContainer}>
          {cUser.gender === 'Male' ? (
            <Image
              style={styles.image}
              source={require('./../../assets/male-icon.png')}
            />
          ) : (
            <Image
              style={styles.image}
              source={require('./../../assets/female-icon.png')}
            />
          )}
        </View>
      </View>
      <View style={styles.lowerSection}>
        <View style={styles.infosContainer}>
          <View style={styles.infoLabelContainer}>
            <Text style={styles.infoLabel}>Name:</Text>
            <Text style={styles.infoLabel}>Father's Name:</Text>
            <Text style={styles.infoLabel}>Father's Phone:</Text>
            <Text style={styles.infoLabel}>Student Roll No.:</Text>
          </View>
          <View style={styles.infoValContainer}>
            <Text style={styles.infoVal}>{cUser.name}</Text>
            <Text style={styles.infoVal}>{cUser.fatherName}</Text>
            <Text style={styles.infoVal}>{cUser.fatherNum}</Text>
            <Text style={styles.infoVal}>{cUser.rollNo}</Text>
          </View>
        </View>
        <View style={styles.logoutButtonContainer}>
          <Button label="Logout" event={onLogoutHandler} />
        </View>
      </View>
    </View>
  );
};

export default Profile;
