import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
    return (_jsx(Container, { maxWidth: "sm", children: _jsxs(Box, { sx: {
                textAlign: 'center',
                mt: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3
            }, children: [_jsx(Typography, { variant: "h3", component: "h1", gutterBottom: true, children: "404 - Page Not Found" }), _jsx(Typography, { variant: "body1", component: "p", gutterBottom: true, children: "The page you're looking for doesn't exist." }), _jsx(Button, { variant: "contained", component: Link, to: "/", sx: { mt: 3 }, children: "Go to Home" })] }) }));
};
export default NotFoundPage;
