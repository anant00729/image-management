import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { LOGIN_ROUTE } from "./Utils/constants";
import { GlobalContext } from './Context/GlobalContext';

const PrivateRouteHome = ({ children }) => {
    const { isAuthenticated } = useContext(GlobalContext);
    return !isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRouteHome;