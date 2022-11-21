import { supabase } from '../../../supabase'
import { RegisterInputValues } from '../../types'

export const signUpUser = async ({
  email,
  password,
  confirmedPassword,
}: RegisterInputValues) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  console.log(data, error)
}
