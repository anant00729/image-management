import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../src/Utils/constants";
import { GlobalContext } from '../src/Context/GlobalContext';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(GlobalContext);
    return isAuthenticated ? children : <Navigate to={LOGIN_ROUTE} />;
};

export default PrivateRoute;