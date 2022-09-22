import {useState} from 'react';
const useLogin = () => {
  const [passwordAppear, setPasswordAppear] = useState<boolean>(true);
  const [rollNo, setRollNo] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onRollNoChangeHandler = studentRollNo => {
    setRollNo(studentRollNo);
  };
  const onPasswordChangeHandler = studentPassword => {
    setPassword(studentPassword);
  };
  return {
    passwordAppear,
    setPasswordAppear,
    rollNo,
    setRollNo,
    onRollNoChangeHandler,
    password,
    setPassword,
    onPasswordChangeHandler,
  };
};

export default useLogin;
