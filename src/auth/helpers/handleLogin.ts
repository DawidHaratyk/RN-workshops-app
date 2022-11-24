import { supabase } from '../../../supabase'
import { useAuth } from '../../contexts/AuthContext'

interface InputValuesProps {
  email: string
  password: string
  login: () => void
  setLoggedUserUuid: (uuid: string) => void
}

export const handleLogin = async ({
  email,
  password,
  login,
  setLoggedUserUuid,
}: InputValuesProps) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (data.user) {
    setLoggedUserUuid(data.user.id)
    login()
  }
}
