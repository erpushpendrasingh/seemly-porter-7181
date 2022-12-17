import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const location = useLocation();

  if (!isAuth) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // authorized so return child components
  return children;
};

export default ProtectedRoute;
