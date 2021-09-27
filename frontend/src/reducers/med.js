import {
  GET_MEDS,
  MED_ERROR,
  DELETE_MED,
  ADD_MED,
  GET_MED,
} from '../actions/types';

const initialState = {
  meds: [],
  med: null,
  loading: true,
  error: {}
};

function medReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MEDS:
      return {
        ...state,
        meds: payload,
        loading: false
      };
    case GET_MED:
      return {
        ...state,
        med: payload,
        loading: false
      };
    case ADD_MED:
      return {
        ...state,
        meds: [payload, ...state.meds],
        loading: false
      };
    case DELETE_MED:
      return {
        ...state,
        meds: state.meds.filter((med) => med._id !== payload),
        loading: false
      };
    case MED_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default medReducer;
