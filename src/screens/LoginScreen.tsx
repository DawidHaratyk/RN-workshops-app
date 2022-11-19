import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../components/Typography/Header/Header'

export const LoginScreen = () => {
  return (
    <View>
      <View>
        <Header variant="h4">Login</Header>
      </View>
      <View>
        <Text>FORM</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
