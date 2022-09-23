import {useState} from 'react';
const useLogin = () => {
  const [passwordAppear, setPasswordAppear] = useState<boolean>(true);
  const [loginData, setLoginData] = useState<{[key: string]: string}>({
    rollNo: '',
    password: '',
  });
  const onChangeHandler = (name: string, value: string) => {
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const onSubmitHandler = () => {
    console.log('on submit working');
  };
  return {
    passwordAppear,
    setPasswordAppear,
    loginData,
    onChangeHandler,
    onSubmitHandler,
  };
};

export default useLogin;
