import { supabase } from '../../../supabase'

interface InputValuesProps {
  email: string
  password: string
  login: () => void
}

export const handleLogin = async ({
  email,
  password,
  login,
}: InputValuesProps) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (data.user) {
    login()
  }
}
