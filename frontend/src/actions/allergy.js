import api from '../utils/api';
import { setAlert } from './alert';
import {
    GET_ALLERGIES,
    GET_ALLERGY,
    ALLERGY_ERROR,
    DELETE_ALLERGY,
    ADD_ALLERGY
} from './types';

// Get allergies
export const getAllergies = () => async dispatch => {
  try {
    const res = await api.get('/allergies');

    dispatch({
      type: GET_ALLERGIES,
      payload: res.data
    });
  } catch (err) {
    console.log("err response",err)
    console.log(err.response)
    dispatch({
      type: ALLERGY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



// Delete allergie
export const deleteAllergy = id => async dispatch => {
  try {
    await api.delete(`/allergies/${id}`);

    dispatch({
      type: DELETE_ALLERGY,
      payload: id
    });

    dispatch(setAlert('Record Removed', 'success'));
  } catch (err) {
    dispatch({
      type: ALLERGY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add allergy
export const addAllergy = formData => async dispatch => {
  try {
    const res = await api.post('/allergies', formData);

    dispatch({
      type: ADD_ALLERGY,
      payload: res.data
    });

    dispatch(setAlert('Record Created', 'success'));
  } catch (err) {
    dispatch({
      type: ALLERGY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get allergy
export const getAllergy = id => async dispatch => {
  try {
    const res = await api.get(`/allergies/${id}`);

    dispatch({
      type: GET_ALLERGY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ALLERGY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


