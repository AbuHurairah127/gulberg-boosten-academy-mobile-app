import {LOGIN, LOGOUT, NEWS} from '../types/constants';
import {auth, db} from './../../config/firebase';
import Toast from 'react-native-toast-message';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy,
  setDoc,
} from 'firebase/firestore/lite';
export const userLogin = (data, setLoading) => async dispatch => {
  try {
    setLoading(true);
    console.log('actionWorking');
    let attendanceArray = [];
    let currentStudent = {};
    let marksArray = [];
    // setButtonLoader(true);
    data = {...data, userName: `${data.rollNo}@gulbergbostonacademy.web.app`};
    console.log(data.userName);
    const res = await signInWithEmailAndPassword(
      auth,
      data.userName,
      data.password,
    );
    let user = auth.currentUser;
    const docSnap = await getDoc(doc(db, 'students', user.uid));
    let userData = docSnap.data();
    const attendanceRef = doc(db, 'attendance', user.uid);
    const attendanceSnap = await getDoc(attendanceRef);

    if (attendanceSnap.exists()) {
      const attendance = attendanceSnap.data();
      attendanceArray = Object.values(attendance);
    }
    const marksRef = collection(db, 'marks');
    const marks = query(marksRef, where('studentId', '==', userData.uid));
    const marksSnapshot = await getDocs(marks);
    marksSnapshot.forEach(doc => {
      marksArray.push(doc.data());
    });
    marksArray = marksArray.sort((a, b) => a.testNo - b.testNo);
    let subjects = JSON.parse(userData.subjects);
    currentStudent = {
      studentData: userData,
      studentAttendance: attendanceArray,
      studentSubjects: subjects,
      studentMarks: marksArray,
    };

    dispatch({
      type: LOGIN,
      payload: currentStudent,
    });
    Toast.show({
      type: 'success',
      text1: 'Login Successfully',
      text2: `${user.displayName} has been successfully logged in.`,
    });
  } catch (error) {
    if (error.message === 'Firebase: Error (auth/user-not-found).') {
      Toast.show({
        type: 'error',
        text1: 'Wrong Roll no',
        text2: 'This student ID does not exists in our record.',
      });
    } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
      Toast.show({
        type: 'error',
        text1: 'Wrong Password',
        text2: 'Entering wrong password or entering the old password.',
      });
    } else {
      Toast.show({
        type: 'error',
        text1: `Internal Server Error`,
        text2: `${error.message}`,
      });
    }
  } finally {
    setLoading(false);
  }
};
export const userLogout = () => async dispatch => {
  try {
    // setIsLoggingOut(true);
    signOut(auth);
    dispatch({
      type: LOGOUT,
    });
    Toast.show({
      type: 'success',
      text1: 'Successfully logged out.',
    });
  } catch (error) {
    window.notify(error.message, 'error');
  } finally {
    // setIsLoggingOut(false);
  }
};
export const fetchCurrentUser = () => async dispatch => {
  try {
    onAuthStateChanged(auth, async user => {
      let attendanceArray = [];
      let marksArray = [];
      let currentStudent = {};
      if (user) {
        const docSnap = await getDoc(doc(db, 'students', user.uid));
        const userData = docSnap.data();
        if (userData !== null && userData !== undefined) {
          const attendanceRef = doc(db, 'attendance', userData.uid);
          const attendanceSnap = await getDoc(attendanceRef);

          if (attendanceSnap.exists()) {
            const attendance = attendanceSnap.data();
            attendanceArray = Object.values(attendance);
            console.log(
              '🚀 ~ file: authActions.js ~ line 97 ~ fetchCurrentUser ~ attendanceArray',
              attendanceArray,
            );
          }
          const marksRef = doc(db, 'marks', user.uid);
          const marksSnap = await getDoc(marksRef);

          if (marksSnap.exists()) {
            const marks = await marksSnap.data();
            marksArray = Object.values(marks);
          }

          marksArray = marksArray.sort((a, b) => a.testNo - b.testNo);
          let subjects = JSON.parse(userData.subjects);
          currentStudent = {
            studentData: userData,
            studentAttendance: attendanceArray,
            studentSubjects: subjects,
            studentMarks: marksArray,
          };
          dispatch({
            type: LOGIN,
            payload: currentStudent,
          });
          Toast.show({
            type: 'success',
            text1: 'Login Successfully',
            text2: `${user.displayName} has been successfully logged in.`,
          });
        } else {
          await signOut(auth);
          dispatch({type: LOGOUT});
          Toast.show({
            type: 'error',
            text1: 'Access Denied',
            text2: `${user.displayName}!Your access has been denied please contact management.`,
          });
        }
      }
    });
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Error 505',
      text2: `${error.message}`,
    });
  } finally {
    // setTimeout(() => {
    //   setPreLoader(false);
    // }, 7500);
  }
};
// export const passwordUpdate = (data, setIsLoading) => async dispatch => {
//   try {
//     setIsLoading(true);
//     const user = auth.currentUser;
//     await updatePassword(user, data.newPassword);
//     const passwordRef = doc(db, 'students', user.uid);
//     await setDoc(passwordRef, {password: data.newPassword}, {merge: true});
//     window.notify('Password updated successfully', 'success');
//   } catch (error) {
//     window.notify(error.message, 'error');
//   } finally {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2500);
//   }
// };
// export const fetchNews = () => async dispatch => {
//   try {
//     let array = [];
//     const q = query(collection(db, 'news'), orderBy('createdAt'));
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach(doc => {
//       let data = doc.data();
//       array.push(data);
//     });
//     dispatch({
//       type: NEWS,
//       payload: array,
//     });
//   } catch (error) {
//     window.notify(error.message, 'error');
//   }
// };
