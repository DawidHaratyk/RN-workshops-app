import { Button, StyleSheet, View } from 'react-native'
import React from 'react'
import Body from '../components/Typography/Body/Body'
import { Header } from '../components/Typography/Header/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

export const WelcomeScreen = ({ navigation }: { navigation: any }) => {
  const goToLoginPage = () => navigation.navigate('Login')

  return (
    <SafeAreaView>
      <Header variant="h3">Welcome</Header>
      <Button title="Start your journey" onPress={goToLoginPage} />
      {/* <Body variant="large">Large body</Body>
      <Body variant="small" color="#000">
        Small body
      </Body>
      <Header variant="h4">Header h4</Header>
      <Header variant="h1" color="#025">
        Header h1
      </Header> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
