const onSubmit = async (data: LoginFormData) => {
  try {
    await login(data.email, data.password);
    navigate('/dashboard');
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    } else {
      setError('An unknown error occurred');
    }
  }
};