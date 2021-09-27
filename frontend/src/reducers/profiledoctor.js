import {
    GET_PROFILE_DOCTOR,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    UPDATE_PROFILE,
    GET_PROFILES,
    GET_REPOS,
    NO_REPOS
  } from '../actions/types';
  
  const initialState = {
    profiledoctor: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
  };
  
  function profiledoctorReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PROFILE_DOCTOR:
      case UPDATE_PROFILE:
        return {
          ...state,
          profiledoctor: payload,
          loading: false
        };
      case GET_PROFILES:
        return {
          ...state,
          profiles: payload,
          loading: false
        };
      case PROFILE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
          profiledoctor: null
        };
      case CLEAR_PROFILE:
        return {
          ...state,
          profiledoctor: null,
          repos: []
        };
      case GET_REPOS:
        return {
          ...state,
          repos: payload,
          loading: false
        };
      case NO_REPOS:
        return {
          ...state,
          repos: []
        };
      default:
        return state;
    }
  }
  
  export default profiledoctorReducer;
  