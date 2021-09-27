import {
    GET_ALLERGIES,
    ALLERGY_ERROR,
    DELETE_ALLERGY,
    ADD_ALLERGY,
    GET_ALLERGY,
  } from '../actions/types';
  
  const initialState = {
    allergies: [],
    allergy: null,
    loading: true,
    error: {}
  };
  
  function allergyReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_ALLERGIES:
        return {
          ...state,
          allergies: payload,
          loading: false
        };
      case GET_ALLERGY:
        return {
          ...state,
          allergy: payload,
          loading: false
        };
      case ADD_ALLERGY:
        return {
          ...state,
          allergies: [payload, ...state.allergies],
          loading: false
        };
      case DELETE_ALLERGY:
        return {
          ...state,
          allergies: state.allergies.filter((allergy) => allergy._id !== payload),
          loading: false
        };
      case ALLERGY_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
  }
  
  export default allergyReducer;
  