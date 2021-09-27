
import Router from './routes';

import React, {  useEffect } from 'react';

import ThemeConfig from './theme';

import { Provider } from 'react-redux';
import store from './store';

import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import { loadDoctor } from './actions/authdoctor';
import { LOGOUT } from './actions/types';

import ScrollToTop from './Components/ScrollToTop';

const App = () => {

 

  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser(), loadDoctor());
    }
    
    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);




  return (
    <Provider store={store}>
    <ThemeConfig>
    <ScrollToTop />
      <Router /> 
    </ThemeConfig>
    </Provider>
  );
}

export default App;

