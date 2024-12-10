// src/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(AuthContext);

  return (
    auth ? <Component {...rest} /> : <Navigate to="/login" />
  );
};

export default PrivateRoute;



