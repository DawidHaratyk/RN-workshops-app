import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'

import { ImageSourcePropType } from 'react-native'
import { UserImageCircle } from '../UserImageCircle/UserImageCircle'

export interface StoryItem {
  image: ImageSourcePropType
}

const storiesData: StoryItem[] = [
  {
    image: require('../../images/graphic1.jpg'),
  },
  {
    image: require('../../images/graphic1.jpg'),
  },
  {
    image: require('../../images/graphic1.jpg'),
  },
  {
    image: require('../../images/graphic1.jpg'),
  },
  {
    image: require('../../images/graphic1.jpg'),
  },
  {
    image: require('../../images/graphic1.jpg'),
  },
  {
    image: require('../../images/graphic1.jpg'),
  },
  {
    image: require('../../images/graphic1.jpg'),
  },
  {
    image: require('../../images/graphic1.jpg'),
  },
]

export const StoriesList = () => {
  const storiesList = storiesData.map(({ image }, key) => (
    <View style={styles.storyItemContainer}>
      <UserImageCircle image={image} size="medium" key={key} />
    </View>
  ))

  return (
    <View>
      <ScrollView horizontal style={styles.storiesContainer}>
        {storiesList}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  storiesContainer: {
    paddingHorizontal: 15,
    height: 80,
    // add bottom box shadow here
  },
  storyItemContainer: {
    marginRight: 9,
  },
})
