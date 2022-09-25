import {useState} from 'react';
const useLogin = () => {
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
    console.log('on submit working');
  };
  return {
    loginData,
    onChangeHandler,
    onSubmitHandler,
  };
};

export default useLogin;
