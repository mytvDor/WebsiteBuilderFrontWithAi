// components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");

  if (!email || !token) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
