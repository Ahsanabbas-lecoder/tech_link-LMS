import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
const CourseDetailPage = () => {
    const { id } = useParams();
    return (_jsx(Container, { children: _jsxs(Typography, { variant: "h4", component: "h1", children: ["Course Details: ", id] }) }));
};
export default CourseDetailPage;
