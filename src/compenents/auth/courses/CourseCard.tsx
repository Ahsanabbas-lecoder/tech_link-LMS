import { Card, CardContent, CardMedia, Typography, Button, Chip } from '@mui/material'
import { Course } from '../../types/course'

interface CourseCardProps {
  course: Course
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={course.thumbnail || '/placeholder-course.jpg'}
        alt={course.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {course.description.substring(0, 100)}...
        </Typography>
        <Chip
          label={course.category}
          size="small"
          sx={{ mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          Instructor: {course.instructor}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 'auto' }}
      >
        View Course
      </Button>
    </Card>
  )
}

export default CourseCard