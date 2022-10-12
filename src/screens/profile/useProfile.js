import {useDispatch} from 'react-redux';
import {userLogout} from '../../store/actions/authActions';

const useProfile = () => {
  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    dispatch(userLogout());
  };
  return {onLogoutHandler};
};

export default useProfile;
