import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextProps {
  isLogged: boolean
  loggedUserUuid: string
  setLoggedUserUuid: Dispatch<SetStateAction<string>>
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextProps>({
  isLogged: false,
  loggedUserUuid: '',
  setLoggedUserUuid: () => '',
  login() {},
  logout() {},
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogged, setIsLogged] = useState(false)
  const [loggedUserUuid, setLoggedUserUuid] = useState('')

  const login = () => setIsLogged(true)
  const logout = () => setIsLogged(false)

  return (
    <AuthContext.Provider
      value={{ isLogged, loggedUserUuid, setLoggedUserUuid, login, logout }}
    >
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
