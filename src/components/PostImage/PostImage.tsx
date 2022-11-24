import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

interface PostImageProps {
  image: string | null
  postId: number
}

export const PostImage = ({ image, postId }: PostImageProps) => {
  const navigation = useNavigation()

  const choosedImage = image
    ? image
    : 'https://i.pinimg.com/280x280_RS/9e/36/c8/9e36c8ae6b12cd6cec3b1de2591da9e4.jpg'

  const goToPostDetailsScreen = () =>
    navigation.navigate('PostDetails', { postId })

  return (
    <TouchableOpacity
      style={styles.postImageContainer}
      onPress={goToPostDetailsScreen}
    >
      <Image source={{ uri: choosedImage }} style={styles.postImage} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  postImageContainer: {
    borderWidth: 2,
    borderColor: 'black',
    width: 100,
    height: 100,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
})
