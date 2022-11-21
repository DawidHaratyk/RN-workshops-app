import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Body } from '../Typography/Body/Body'

interface PostInformationsProps {
  amountOfLikes: number
  commentAuthor: string
  comment: string
}

export const PostInformations = ({
  amountOfLikes,
  commentAuthor,
  comment,
}: PostInformationsProps) => {
  return (
    <View style={styles.postInformations}>
      <Body title={`${amountOfLikes} likes`} variant="large" />
      <Body title={`${commentAuthor}: ${comment}`} variant="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  postInformations: {
    marginVertical: 10,
  },
})
