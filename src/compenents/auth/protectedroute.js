import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? _jsx(Outlet, {}) : _jsx(Navigate, { to: "/login", replace: true });
};
export default ProtectedRoute;
