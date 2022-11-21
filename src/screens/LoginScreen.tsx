import { StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LoginView } from '../components/LoginView/LoginView'

export const LoginScreen = () => {
  return (
    <SafeAreaView>
      <LoginView />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
