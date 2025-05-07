"use strict";
const onSubmit = async (data) => {
    try {
        await register(data.name, data.email, data.password);
        navigate('/dashboard');
    }
    catch (error) {
        if (error instanceof Error) {
            setError(error.message);
        }
        else {
            setError('Registration failed');
        }
    }
};
