import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuard = () => {
  const location = useLocation();
  const userDetail = useSelector((state) => state.auth.ud);
  return userDetail ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default AuthGuard;
