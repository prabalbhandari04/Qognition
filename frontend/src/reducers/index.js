import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import authdoctor from './authdoctor';
import profile from './profile';
import profiledoctor from './profiledoctor';
import query from './query';
import allergy from './allergy'
import med from './med'
import immunize from './immunize'

export default combineReducers({
  alert,
  auth,
  authdoctor,
  profile,
  profiledoctor,
  query,
  med,
  allergy,
  immunize,

});
