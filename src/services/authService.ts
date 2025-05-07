// src/services/authService.ts

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
}

// Mock login function (replace with real API calls)
export const login = async (email: string, password: string): Promise<User> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Mock validation - replace with actual API call
  if (email === 'admin@techlink.com' && password === 'admin123') {
    return {
      id: '1',
      name: 'Admin User',
      email: email,
      role: 'admin'
    };
  }

  if (email === 'student@techlink.com' && password === 'student123') {
    return {
      id: '2',
      name: 'Student User',
      email: email,
      role: 'student'
    };
  }

  throw new Error('Invalid email or password');
};

// Mock registration function
export const register = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Basic validation
  if (!name || !email || !password) {
    throw new Error('All fields are required');
  }

  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }

  return {
    id: Math.random().toString(36).substring(2, 9),
    name: name,
    email: email,
    role: 'student' // Default role
  };
};

// Mock logout function
export const logout = async (): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  // In a real app, this would call your backend logout endpoint
};