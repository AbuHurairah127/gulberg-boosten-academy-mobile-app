import {LOGIN, LOGOUT, NEWS} from '../types/constants';
import {auth, db} from './../../config/firebase';
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
export const userLogin = data => async dispatch => {
  try {
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
  } catch (error) {
    console.log(error.message, 'error in firebase');
  } finally {
  }
};
export const userLogout = () => async dispatch => {
  try {
    // setIsLoggingOut(true);
    signOut(auth);
    dispatch({
      type: LOGOUT,
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
          if (user) {
          }
        } else {
          await signOut(auth);
          dispatch({type: LOGOUT});
        }
      }
    });
  } catch (error) {
    window.notify(error.message, 'error');
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
