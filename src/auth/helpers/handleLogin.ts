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
  //   console.log(email, password)

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  //   console.log(data, error)

  if (data.user) {
    login()
  }
}
