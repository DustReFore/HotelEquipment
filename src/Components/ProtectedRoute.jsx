import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, requiredRole }) {
    const { user } = useContext(AuthContext);

    if (!user) return <Navigate to="/" />; // если не вошёл — на главную
    if (requiredRole && user.role !== requiredRole) return <Navigate to="/" />; // если не та роль — в каталог

    return children; // доступ разрешён
}

export default ProtectedRoute;