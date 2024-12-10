import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom'; // Asegúrate de importar Navigate
import { AuthContext } from './src/Context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

