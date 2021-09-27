import api from '../utils/api';
import { setAlert } from './alert';
import {
    GET_MEDS,
    GET_MED,
    MED_ERROR,
    DELETE_MED,
    ADD_MED
} from './types';

// Get allergies
export const getMeds = () => async dispatch => {
  try {
    const res = await api.get('/meds');

    dispatch({
      type: GET_MEDS,
      payload: res.data
    });
  } catch (err) {
    console.log("err response",err)
    console.log(err.response)
    dispatch({
      type: MED_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



// Delete allergie
export const deleteMed = id => async dispatch => {
  try {
    await api.delete(`/meds/${id}`);

    dispatch({
      type: DELETE_MED,
      payload: id
    });

    dispatch(setAlert('Medication Removed', 'success'));
  } catch (err) {
    dispatch({
      type: MED_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add allergy
export const addMed = formData => async dispatch => {
  try {
    const res = await api.post('/meds', formData);

    dispatch({
      type: ADD_MED,
      payload: res.data
    });

    dispatch(setAlert('Medication Added. Hope you get well soon!', 'success'));
  } catch (err) {
    dispatch({
      type: MED_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get allergy
export const getMed = id => async dispatch => {
  try {
    const res = await api.get(`/meds/${id}`);

    dispatch({
      type: GET_MED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MED_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


