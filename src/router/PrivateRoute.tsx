import UseUser from "@/hook/UseUser";

import { Navigate, useLocation } from "react-router-dom";
import { AdminRouteProps } from "./AdminRoute";

const PrivateRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const user = UseUser();

  const location = useLocation();

  if (user) return children;

  return <Navigate to="/login" state={location.pathname} replace={true} />;
};

export default PrivateRoute;
