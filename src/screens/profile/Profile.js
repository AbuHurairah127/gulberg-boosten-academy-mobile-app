import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './ProfileStyles';
import useProfile from './useProfile';
import Button from '../../components/button/Button';
const Profile = () => {
  const {onLogoutHandler} = useProfile();
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}></View>
      <View style={styles.lowerSection}>
        <View style={styles.logoutButtonContainer}>
          <Button label="Logout" event={onLogoutHandler} />
        </View>
      </View>
    </View>
  );
};

export default Profile;
