import {useDispatch, useSelector} from 'react-redux';
import {userLogout} from '../../store/actions/authActions';

const useProfile = () => {
  const dispatch = useDispatch();
  const cUser = useSelector(store => store.authReducer.cUser);
  const onLogoutHandler = () => {
    dispatch(userLogout());
  };
  return {onLogoutHandler, cUser};
};

export default useProfile;
