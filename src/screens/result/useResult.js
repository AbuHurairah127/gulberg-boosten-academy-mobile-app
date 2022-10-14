import {useSelector} from 'react-redux';

const useResult = () => {
  const marks = useSelector(store => store.authReducer.cUserMarks);
  console.log('🚀 ~ file: useResult.js ~ line 5 ~ useResult ~ marks', marks);
  return {marks};
};

export default useResult;
