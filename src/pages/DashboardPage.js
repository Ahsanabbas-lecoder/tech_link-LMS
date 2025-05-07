import { jsx as _jsx } from "react/jsx-runtime";
import { Typography, Container } from '@mui/material';
const DashboardPage = () => {
    return (_jsx(Container, { children: _jsx(Typography, { variant: "h4", component: "h1", children: "Dashboard" }) }));
};
export default DashboardPage;
