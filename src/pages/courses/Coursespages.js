import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CourseCard from '../../components/courses/CourseCard';
import { fetchCourses } from '../../services/courseService';
const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadCourses = async () => {
            try {
                const data = await fetchCourses();
                setCourses(data);
            }
            catch (error) {
                console.error('Failed to fetch courses:', error);
            }
            finally {
                setLoading(false);
            }
        };
        loadCourses();
    }, []);
    if (loading) {
        return _jsx(Typography, { children: "Loading courses..." });
    }
    return (_jsxs(Container, { maxWidth: "lg", sx: { py: 4 }, children: [_jsx(Typography, { variant: "h4", component: "h1", gutterBottom: true, children: "Available Courses" }), _jsx(Grid, { container: true, spacing: 3, children: courses.map((course) => (_jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, children: _jsx(CourseCard, { course: course }) }, course.id))) })] }));
};
export default CoursesPage;
