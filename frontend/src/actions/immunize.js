import api from '../utils/api';
import { setAlert } from './alert';
import {
    GET_IMMUNIZES,
    GET_IMMUNIZE,
    IMMUNIZE_ERROR,
    DELETE_IMMUNIZE,
    ADD_IMMUNIZE
} from './types';

// Get allergies
export const getImmunizes = () => async dispatch => {
  try {
    const res = await api.get('/immunize');

    dispatch({
      type: GET_IMMUNIZES,
      payload: res.data
    });
  } catch (err) {
    console.log("err response",err)
    console.log(err.response)
    dispatch({
      type: IMMUNIZE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



// Delete allergie
export const deleteImmunize = id => async dispatch => {
  try {
    await api.delete(`/immunize/${id}`);

    dispatch({
      type: DELETE_IMMUNIZE,
      payload: id
    });

    dispatch(setAlert('Record Removed', 'success'));
  } catch (err) {
    dispatch({
      type: IMMUNIZE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add allergy
export const addImmunize = formData => async dispatch => {
  try {
    const res = await api.post('/immunize', formData);

    dispatch({
      type: ADD_IMMUNIZE,
      payload: res.data
    });

    dispatch(setAlert('Record Created', 'success'));
  } catch (err) {
    dispatch({
      type: IMMUNIZE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get allergy
export const getImmunize = id => async dispatch => {
  try {
    const res = await api.get(`/immunize/${id}`);

    dispatch({
      type: GET_IMMUNIZE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: IMMUNIZE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


