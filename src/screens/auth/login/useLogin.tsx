import {useState} from 'react';
const useLogin = () => {
  const [passwordAppear, setPasswordAppear]: Boolean = useState(true);
  return {passwordAppear, setPasswordAppear};
};

export default useLogin;
