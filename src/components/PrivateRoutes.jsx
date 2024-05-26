import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoutes = () => {
    const { userLoggedIn } = useContext(AuthContext);

    return userLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;