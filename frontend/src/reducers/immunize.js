import {
    GET_IMMUNIZES,
    GET_IMMUNIZE,
    IMMUNIZE_ERROR,
    DELETE_IMMUNIZE,
    ADD_IMMUNIZE
  } from '../actions/types';
  
  const initialState = {
    immunizes: [],
    immunize: null,
    loading: true,
    error: {}
  };
  
  function immunizeReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_IMMUNIZES:
        return {
          ...state,
          immunizes: payload,
          loading: false
        };
      case GET_IMMUNIZE:
        return {
          ...state,
          immunize: payload,
          loading: false
        };
      case ADD_IMMUNIZE:
        return {
          ...state,
          immunizes: [payload, ...state.immunizes],
          loading: false
        };
      case DELETE_IMMUNIZE:
        return {
          ...state,
          immunizes: state.immunizes.filter((immunize) => immunize._id !== payload),
          loading: false
        };
      case IMMUNIZE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
  }
  
  export default immunizeReducer;
  