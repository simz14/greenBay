import React from "react";
import { Navigate } from "react-router-dom";
import { userAuth } from "../utils/auth.js";

export function PrivateRoute({ children }) {
  if (!userAuth()) {
    return <Navigate to="/login" />;
  }
  return children;
}
