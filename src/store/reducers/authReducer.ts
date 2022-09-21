import {LOGIN, LOGOUT, NEWS} from '../types/constants';
let initialState = {
  isAuthenticated: false,
  cUser: {},
  cUserAttendance: [],
  noOfPresentDays: 0,
  totalDays: 0,
  noOfAbsents: 0,
  cUserMarks: [],
  cUserSubjects: [],
  news: [],
};
interface LoginAction {
  type: 'LOGIN';
  payload: {
    studentData: object;
    studentAttendance: {[key: string]: any}[];
    studentSubjects: Array<String>;
    studentMarks: Array<any>;
  };
}
type Action = LoginAction;
const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOGIN: {
      let isUserLogginedNow: boolean = true;
      let user: object = action.payload.studentData;
      let userAttendance: {[key: string]: any}[] =
        action.payload.studentAttendance;
      let presents: number = 0;
      let absents: number = 0;
      let totalNoOfDays: number = 0;
      userAttendance.forEach(attendance => {
        if (attendance.attendanceStatus === true) {
          presents++;
        }
        totalNoOfDays++;
      });
      absents = totalNoOfDays - presents;
      let marksArray = action.payload.studentMarks;
      let subjects = action.payload.studentSubjects;
      return {
        ...state,
        isAuthenticated: isUserLogginedNow,
        cUser: user,
        cUserAttendance: userAttendance,
        noOfPresentDays: presents,
        noOfAbsents: absents,
        totalDays: totalNoOfDays,
        cUserMarks: marksArray,
        cUserSubjects: subjects,
      };
    }
    case LOGOUT: {
      let isUserLogginedNow = false;
      return {
        ...state,
        isAuthenticated: isUserLogginedNow,
        cUser: {},
      };
    }
    case NEWS: {
      let newNews = action.payload;
      return {
        ...state,
        news: newNews,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
