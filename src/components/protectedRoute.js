import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const authentictaion = true;
  return authentictaion ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
