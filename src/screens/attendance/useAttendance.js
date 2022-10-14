import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const useAttendance = () => {
  const presents = useSelector(store => store.authReducer.noOfPresentDays);
  const absents = useSelector(store => store.authReducer.noOfAbsents);
  const totalDays = useSelector(store => store.authReducer.totalDays);
  return {
    presents,
    absents,
    totalDays,
  };
};

export default useAttendance;
