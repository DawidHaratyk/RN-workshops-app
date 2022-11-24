import { StyleSheet, TextInput, View } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { windowWidth } from '../../constants'

interface InputWithSubmitOptionProps {
  value: string
  onChangeText: Dispatch<SetStateAction<string>>
  placeholder: string
  onPress?: () => void
}

export const InputWithSubmitOption = ({
  value,
  onChangeText,
  placeholder,
  onPress,
}: InputWithSubmitOptionProps) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        style={[styles.input, { width: windowWidth * 0.88 }]}
      />
      <AntDesign
        name="check"
        size={24}
        color="black"
        style={styles.submitIcon}
        onPress={onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInputContainer: {
    alignItems: 'center',
  },
  input: {
    width: windowWidth * 0.8,
    borderRadius: 3,
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 5,
    minHeight: 40,
  },
  submitIcon: {
    position: 'absolute',
    top: '25%',
    right: 10,
  },
})
