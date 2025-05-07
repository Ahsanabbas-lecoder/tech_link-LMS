const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
export const fetchCourses = async () => {
    try {
        // In a real app, this would be an actual API call
        // const response = await axios.get(`${API_URL}/courses`)
        // return response.data
        // Mock data for demonstration
        return [
            {
                id: '1',
                title: 'Introduction to React',
                description: 'Learn the fundamentals of React including components, state, and props.',
                category: 'Web Development',
                instructor: 'Jane Doe',
                duration: '10 hours',
                level: 'Beginner',
                thumbnail: '/react-course.jpg'
            },
            {
                id: '2',
                title: 'Advanced TypeScript',
                description: 'Deep dive into TypeScript features for enterprise applications.',
                category: 'Programming',
                instructor: 'John Smith',
                duration: '15 hours',
                level: 'Advanced',
                thumbnail: '/typescript-course.jpg'
            },
            {
                id: '3',
                title: 'UI/UX Design Principles',
                description: 'Master the principles of good design and user experience.',
                category: 'Design',
                instructor: 'Alex Johnson',
                duration: '8 hours',
                level: 'Intermediate',
                thumbnail: '/design-course.jpg'
            }
        ];
    }
    catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};
export const fetchCourseById = async (id) => {
    try {
        // const response = await axios.get(`${API_URL}/courses/${id}`)
        // return response.data
        // Mock data
        return {
            id,
            title: 'Introduction to React',
            description: 'Learn the fundamentals of React including components, state, and props.',
            category: 'Web Development',
            instructor: 'Jane Doe',
            duration: '10 hours',
            level: 'Beginner',
            thumbnail: '/react-course.jpg',
            modules: [
                {
                    id: '1',
                    title: 'Getting Started with React',
                    lessons: [
                        { id: '1', title: 'What is React?', duration: '30 min', type: 'video' },
                        { id: '2', title: 'Setting Up Your Environment', duration: '45 min', type: 'video' }
                    ]
                },
                {
                    id: '2',
                    title: 'React Components',
                    lessons: [
                        { id: '3', title: 'Functional Components', duration: '40 min', type: 'video' },
                        { id: '4', title: 'Class Components', duration: '35 min', type: 'video' }
                    ]
                }
            ]
        };
    }
    catch (error) {
        console.error(`Error fetching course ${id}:`, error);
        throw error;
    }
};
