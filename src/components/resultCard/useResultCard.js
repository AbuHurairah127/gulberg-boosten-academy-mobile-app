import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const useResultCard = () => {
  const cUserSubjects = useSelector(store => store.authReducer.cUserSubjects);
  return {cUserSubjects};
};

export default useResultCard;
