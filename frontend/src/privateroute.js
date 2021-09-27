import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, redirectTo, isAuthenticated, path, ...props }) => {
    if(!isAuthenticated) {
        return <Navigate to={redirectTo} />;
    } else {
    return <Route path={path} element={<Component />} />
  }
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);