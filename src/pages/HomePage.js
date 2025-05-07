import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (_jsx(Container, { maxWidth: "md", children: _jsxs(Box, { sx: {
                textAlign: 'center',
                mt: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3
            }, children: [_jsx(Typography, { variant: "h3", component: "h1", gutterBottom: true, children: "Welcome to TechLink LMS" }), _jsx(Typography, { variant: "h6", component: "p", gutterBottom: true, children: "Start your learning journey today" }), _jsxs(Box, { sx: { display: 'flex', gap: 2, mt: 4 }, children: [_jsx(Button, { variant: "contained", size: "large", component: Link, to: "/login", children: "Login" }), _jsx(Button, { variant: "outlined", size: "large", component: Link, to: "/register", children: "Register" })] })] }) }));
};
export default HomePage;
