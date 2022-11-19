import { createContext, ReactNode, useContext, useState } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextProps {
  isLogged: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextProps>({
  isLogged: false,
  login() {},
  logout() {},
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogged, setIsLogged] = useState(false)

  const login = () => setIsLogged(true)
  const logout = () => setIsLogged(false)

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('useAuth must be inside AuthProvider!')
  }

  return authContext
}
