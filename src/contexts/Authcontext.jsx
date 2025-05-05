import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { User } from '../types/user'
import { login as apiLogin, register as apiRegister } from '../services/authService'

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check for existing session/token
    const token = localStorage.getItem('techlink_token')
    if (token) {
      // Validate token with backend
      // For now, we'll just set a dummy user
      setUser({
        id: '1',
        name: 'Demo User',
        email: 'demo@techlink.com',
        role: 'student'
      })
      setIsAuthenticated(true)
    }
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const userData = await apiLogin(email, password)
      setUser(userData)
      setIsAuthenticated(true)
      localStorage.setItem('techlink_token', 'dummy_token')
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      const userData = await apiRegister(name, email, password)
      setUser(userData)
      setIsAuthenticated(true)
      localStorage.setItem('techlink_token', 'dummy_token')
    } catch (error) {
      console.error('Registration failed:', error)
      throw error
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('techlink_token')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}