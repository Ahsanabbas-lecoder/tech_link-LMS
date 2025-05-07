import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './compenents/auth/auth/protectedroute'
import HomePage from './pages/HomePage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import CoursesPage from './pages/courses/CoursesPage'
import CourseDetailPage from './pages/courses/CourseDetailPage'
import NotFoundPage from './pages/NotFoundPage'
// import ProtectedRoute from './components/auth/ProtectedRoute';
// import CoursesPage from './pages/courses/CoursesPage';

function App() {
  return (
    <>
      <CssBaseline />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
          </Route>
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App