import {
    REGISTER_SUCCESS,
    //REGISTER_FAIL,
    DOCTOR_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    //LOGIN_FAIL,
    LOGOUT,
    ACCOUNT_DELETED
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    doctor: null
  };
  
  function authdoctorReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case DOCTOR_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          doctor: payload
        };
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false
        };
      case ACCOUNT_DELETED:
      case AUTH_ERROR:
      case LOGOUT:
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          doctor: null
        };
      default:
        return state;
    }
  }
  
  export default authdoctorReducer;
  