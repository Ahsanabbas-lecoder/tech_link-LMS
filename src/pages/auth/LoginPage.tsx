import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthContext';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      setError('root', { message: 'Invalid credentials' });
    }
  };

  return ("use strict";
const onSubmit = async (data) => {
    try {
        await login(data.email, data.password);
        navigate('/dashboard');
    }
    catch (error) {
        if (error instanceof Error) {
            setError(error.message);
        }
        else {
            setError('An unknown error occurred');
        }
    }
};
 );
}