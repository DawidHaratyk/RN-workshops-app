import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MainButton } from '../components/Typography/MainButton/MainButton'

export const CreatePostScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Image source={require('../images/graphic1.jpg')} />
      </View>
      <View>
        <MainButton title="Title" backgroundColor="green" />
        <MainButton title="Description" backgroundColor="green" />
      </View>
      <View></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
