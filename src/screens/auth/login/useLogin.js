import {useState} from 'react';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {useDispatch} from 'react-redux';
import {userLogin, fetchCurrentUser} from '../../../store/actions/authActions';
import {useEffect} from 'react';
const useLogin = () => {
  const dispatch = useDispatch();
  const [passwordAppear, setPasswordAppear] = useState(true);
  const [loginData, setLoginData] = useState({
    rollNo: '',
    password: '',
  });
  const onChangeHandler = (name, value) => {
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const onSubmitHandler = () => {
    if (loginData.rollNo.length < 5) {
      Toast.show({
        type: 'error',
        text1: 'Attention!',
        text2: 'You have not entered your roll number properly.',
      });
    } else if (loginData.password.length < 6) {
      Toast.show({
        type: 'error',
        text1: 'Attention!',
        text2: 'You have not entered your password properly.',
      });
    } else {
      dispatch(userLogin(loginData));
    }
  };
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return {
    passwordAppear,
    setPasswordAppear,
    loginData,
    onChangeHandler,
    onSubmitHandler,
  };
};

export default useLogin;
