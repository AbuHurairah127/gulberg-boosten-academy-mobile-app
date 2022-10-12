import {useSelector} from 'react-redux';

const useResult = () => {
  const marks = useSelector(store => store.authReducer.cUserMarks);
  return {marks};
};

export default useResult;
