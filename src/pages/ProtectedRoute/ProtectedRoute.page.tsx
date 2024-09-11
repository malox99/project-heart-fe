import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: any) => {
  if (false) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
