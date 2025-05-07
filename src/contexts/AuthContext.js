import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { login as apiLogin, register as apiRegister } from '../services/authService';
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const initializeAuth = async () => {
            const token = localStorage.getItem('techlink_token');
            const userData = localStorage.getItem('techlink_user');
            if (token && userData) {
                try {
                    const parsedUser = JSON.parse(userData);
                    setUser(parsedUser);
                    setIsAuthenticated(true);
                }
                catch (error) {
                    console.error('Failed to parse user data:', error);
                    logout();
                }
            }
        };
        initializeAuth();
    }, []);
    const login = async (email, password) => {
        try {
            const userData = await apiLogin(email, password);
            setUser(userData);
            setIsAuthenticated(true);
            localStorage.setItem('techlink_token', 'dummy_token');
            localStorage.setItem('techlink_user', JSON.stringify(userData));
        }
        catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };
    const register = async (name, email, password) => {
        try {
            const userData = await apiRegister(name, email, password);
            setUser(userData);
            setIsAuthenticated(true);
            localStorage.setItem('techlink_token', 'dummy_token');
            localStorage.setItem('techlink_user', JSON.stringify(userData));
        }
        catch (error) {
            console.error('Registration failed:', error);
            throw error;
        }
    };
    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('techlink_token');
        localStorage.removeItem('techlink_user');
    };
    // Memoize context value to prevent unnecessary re-renders
    const contextValue = useMemo(() => ({
        user,
        login,
        register,
        logout,
        isAuthenticated
    }), [user, isAuthenticated]);
    return (_jsx(AuthContext.Provider, { value: contextValue, children: children }));
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
