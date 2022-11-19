import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { WelcomeScreen } from '../../screens/WelcomeScreen'
import { LoginScreen } from '../../screens/LoginScreen'
import { RegisterScreen } from '../../screens/RegisterScreen'
import { useAuth } from '../../contexts/AuthContext'
import Test from '../../screens/Test'

const Stack = createNativeStackNavigator()

export const Root = () => {
  const { isLogged } = useAuth()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLogged ? (
        <>
          <Stack.Screen name="Home" component={Test} />
          {/* <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </>
      ) : (
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
