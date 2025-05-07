import { useParams } from 'react-router-dom'
import { Container, Typography } from '@mui/material'

const CourseDetailPage = () => {
  const { id } = useParams()

  return (
    <Container>
      <Typography variant="h4" component="h1">
        Course Details: {id}
      </Typography>
    </Container>
  )
}

export default CourseDetailPage
