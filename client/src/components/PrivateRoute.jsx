import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  if (!authUser) {
    return <Navigate to="/login" />;
  }
  return children;
}
