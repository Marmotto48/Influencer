import React from "react";
import { Navigate } from "react-router-dom";

function CustomerRoute({ Component }) {
  const isAuth = localStorage.getItem("token");

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  //   return isAuth ? <Outlet /> : <Navigate to="/customer/login" />;
  return isAuth ? <Component /> : <Navigate to="/customer/login" />;
}

export default CustomerRoute;
