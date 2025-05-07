import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import CoursesPage from './pages/courses/CoursesPage';
import CourseDetailPage from './pages/courses/CourseDetailPage';
import NotFoundPage from './pages/NotFoundPage';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(CssBaseline, {}), _jsx(AuthProvider, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/login", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "/register", element: _jsx(RegisterPage, {}) }), _jsxs(Route, { element: _jsx(ProtectedRoute, {}), children: [_jsx(Route, { path: "/dashboard", element: _jsx(DashboardPage, {}) }), _jsx(Route, { path: "/courses", element: _jsx(CoursesPage, {}) }), _jsx(Route, { path: "/courses/:id", element: _jsx(CourseDetailPage, {}) })] }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) })] }) })] }));
}
export default App;
