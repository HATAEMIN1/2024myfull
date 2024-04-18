import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRouter({ isAuth }) {
  return isAuth ? <Outlet></Outlet> : <Navigate to='/login'></Navigate>;
}

export default ProtectedRouter;
