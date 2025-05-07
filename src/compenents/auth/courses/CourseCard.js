import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardMedia, Typography, Button, Chip } from '@mui/material';
const CourseCard = ({ course }) => {
    return (_jsxs(Card, { sx: { height: '100%', display: 'flex', flexDirection: 'column' }, children: [_jsx(CardMedia, { component: "img", height: "140", image: course.thumbnail || '/placeholder-course.jpg', alt: course.title }), _jsxs(CardContent, { sx: { flexGrow: 1 }, children: [_jsx(Typography, { gutterBottom: true, variant: "h5", component: "h2", children: course.title }), _jsxs(Typography, { variant: "body2", color: "text.secondary", paragraph: true, children: [course.description.substring(0, 100), "..."] }), _jsx(Chip, { label: course.category, size: "small", sx: { mb: 1 } }), _jsxs(Typography, { variant: "body2", color: "text.secondary", children: ["Instructor: ", course.instructor] })] }), _jsx(Button, { variant: "contained", fullWidth: true, sx: { mt: 'auto' }, children: "View Course" })] }));
};
export default CourseCard;
