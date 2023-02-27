import { Navigate } from "react-router-dom";
import { userAuth } from "../utils/auth";

export function PrivateRoute({ children }) {
  if (!userAuth()) {
    return <Navigate to="/login" />;
  }
  return children;
}
