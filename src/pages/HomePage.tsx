import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box 
        sx={{
          textAlign: 'center',
          mt: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to TechLink LMS
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Start your learning journey today
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <Button 
            variant="contained" 
            size="large" 
            component={Link} 
            to="/login"
          >
            Login
          </Button>
          <Button 
            variant="outlined" 
            size="large" 
            component={Link} 
            to="/register"
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;