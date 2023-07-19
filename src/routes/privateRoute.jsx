/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../contextProvider/useAppContext";

const PrivateRoutes = ({ role, children }) => {
  const { userData } = useAppContext();
  const { pathname } = useLocation();

  if (!role) {
    if (!userData.email) {
      return <Navigate to="/login" state={{ path: pathname }} />;
    }
    return children;
  }

  if (role) {
    if (!userData?.role || (userData?.role && userData?.role !== role)) {
      return <Navigate to="/login" state={{ path: pathname }} />;
    }
  }

  return children;
};

export default PrivateRoutes;
