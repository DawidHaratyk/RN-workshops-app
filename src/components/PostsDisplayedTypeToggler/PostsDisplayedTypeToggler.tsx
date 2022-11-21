import { Pressable, StyleSheet, View } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { theme } from '../../theme/theme'

interface TogglerProps {
  postDisplayType: 'show-entire-content' | 'show-image-only'
  setIsEntirePostShown: Dispatch<SetStateAction<boolean>>
}

export const PostsDisplayedTypeToggler = ({
  postDisplayType,
  setIsEntirePostShown,
}: TogglerProps) => {
  const togglePostsDisplayType = () =>
    setIsEntirePostShown((prevValue) => !prevValue)

  return (
    <Pressable style={styles.togglerContainer} onPress={togglePostsDisplayType}>
      <View
        style={[
          styles.toggler,
          postDisplayType === 'show-entire-content' && styles.togglerMove,
        ]}
      ></View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  togglerContainer: {
    width: 80,
    height: 40,
    borderColor: theme.colors.secondary,
    borderWidth: 2,
  },
  toggler: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: 36,
    borderRadius: 20,
    borderColor: theme.colors.secondary,
    borderWidth: 2,
    backgroundColor: theme.colors.secondary,
    opacity: 0.8,
  },
  togglerMove: {
    top: 0,
    left: '100%',
    transform: [{ translateX: -36 }],
  },
})
