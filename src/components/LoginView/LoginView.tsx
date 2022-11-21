import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Header } from '../Typography/Header/Header'
import { useAuth } from '../../contexts/AuthContext'
import { MainButton } from '../Typography/MainButton/MainButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginValidation } from '../../auth/validations'
import { handleLogin } from '../../auth/helpers/handleLogin'
import FormInput from '../FormInput/FormInput'

export const LoginView = () => {
  const { login } = useAuth()
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const goToRegisterScreen = () => navigation.navigate('Register')

  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginHeader}>
        <Header title="Login" variant="h4" />
      </View>
      <View>
        <View style={styles.loginInputs}>
          <FormInput control={control} errors={errors['email']} name="email" />
          <FormInput
            control={control}
            errors={errors['password']}
            name="password"
          />
        </View>
        <View>
          <MainButton
            title="Login"
            backgroundColor="green"
            onPress={handleSubmit((values) =>
              handleLogin({ ...values, login })
            )}
          />
          <MainButton
            title="Sign up"
            backgroundColor="red"
            onPress={goToRegisterScreen}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginHeader: {
    marginBottom: 80,
  },
  loginInputs: {
    marginBottom: 15,
  },
})
