// src/UI/privateComponent.js
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = localStorage.getItem("user"); // check if user is logged in
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
