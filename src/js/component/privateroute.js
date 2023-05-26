import React from "react";
import useAuth from "../hooks/useAuth"

export const PrivateRoute = ({ children }) => {
    const auth = useAuth();
    return auth ? <>{children}</> : <Navigate to="/login" />;
  }