import UseUser from "@/hook/UseUser";
import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export interface AdminRouteProps {
  children: ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const user = UseUser();

  if (user?.role === "admin") return children;

  return <Navigate to="/dashboard" />;
};

export default AdminRoute;
