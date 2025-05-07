import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { TextField, Button, Typography, Box } from '@mui/material';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await register(data.name, data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      setError(
        error instanceof Error 
          ? error.message 
          : 'Registration failed - please try again'
      );
    }
  };

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
      <TextField
        name="name"
        label="Full Name"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        required
        fullWidth
        margin="normal"
      />
      
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 3, mb: 2 }}
      >
        Register
      </Button>
    </Box>
  );
}