import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,

  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_COMMENT_DOCTOR,
  REMOVE_COMMENT_DOCTOR,
 
} from '../actions/types';

const initialState = {
  queries: [],
  query: null,
  loading: true,
  error: {}
};

function queryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        queries: payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        query: payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        queries: [payload, ...state.queries],
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        queries: state.queries.filter((query) => query._id !== payload),
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        queries: state.queries.map((query) =>
          query._id === payload.id ? { ...query, likes: payload.likes } : query
        ),
        loading: false
      };

   
    
    case ADD_COMMENT:
      return {
        ...state,
        query: { ...state.query, comments: payload },
        loading: false
      };
    case ADD_COMMENT_DOCTOR:
      return {
        ...state,
        query: { ...state.query, comments: payload },
        loading: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        query: {
          ...state.query,
          comments: state.query.comments.filter(
            (comment) => comment._id !== payload
          )
        },
        loading: false
      };
    case REMOVE_COMMENT_DOCTOR:
      return {
        ...state,
        query: {
          ...state.query,
          comments: state.query.comments.filter(
            (comment) => comment._id !== payload
          )
        },
        loading: false
      };
    default:
      return state;
  };
}

export default queryReducer;
