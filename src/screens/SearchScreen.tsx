import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { InputWithSubmitOption } from '../components/InputWithSubmitOption/InputWithSubmitOption'
import { Header } from '../components/Typography/Header/Header'
import { PostsList } from '../components/PostsList/PostsList'
import { PostProps } from '../types'
import { UserImageCircle } from '../components/UserImageCircle/UserImageCircle'
import { Body } from '../components/Typography/Body/Body'

const postsData: PostProps[] = [
  {
    name: 'name 1',
    image: require('../images/graphic1.jpg'),
    amountOfLikes: 8,
    commentAuthor: 'Somebody 1',
    comment: 'XDZXDXDXDXDXD',
    id: 1,
  },
  {
    name: 'name 2',
    image: require('../images/graphic1.jpg'),
    amountOfLikes: 14,
    commentAuthor: 'Somebody 2',
    comment: 'XDZXDXDXDXDXDXDXDXDXDXDXD',
    id: 2,
  },
  {
    name: 'name 3',
    image: require('../images/graphic1.jpg'),
    amountOfLikes: 10,
    commentAuthor: 'Somebody 3',
    comment: 'XDZXDXDXDXDXD',
    id: 3,
  },
  {
    name: 'name 4',
    image: require('../images/graphic1.jpg'),
    amountOfLikes: 14,
    commentAuthor: 'Somebody 4',
    comment: 'XDZXDXDXDXDXD',
    id: 4,
  },
]

const usersData = [
  {
    name: 'Ania K.',
    image: require('../images/graphic1.jpg'),
  },
  {
    name: 'Maciej Jarząbek',
    image: require('../images/graphic1.jpg'),
  },
  {
    name: 'Zuzia Matuszek',
    image: require('../images/graphic1.jpg'),
  },
]

export const SearchScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchInputContainer}>
        <InputWithSubmitOption
          value=""
          onChangeText={() => null}
          placeholder="search"
        />
      </View>
      <View style={styles.postsListContainer}>
        <Header
          title="Posts"
          variant="h5"
          additionalStyles={{
            textAlign: 'left',
            marginLeft: 15,
            marginBottom: 3,
          }}
        />
        <PostsList data={postsData} postDisplayType="show-image-only" />
      </View>
      <View style={styles.paddingWrapper}>
        <Header
          title="People"
          variant="h5"
          additionalStyles={{ textAlign: 'left', marginBottom: 3 }}
        />
        {usersData.map((userObj) => (
          <View style={styles.userContainer}>
            <UserImageCircle image={userObj.image} size="small" />
            <Body title={userObj.name} variant="small" />
          </View>
        ))}
      </View>
      {/* think about making only one component for all categories, example name of the component: CategoryItemsList */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchInputContainer: {
    marginTop: 20,
    marginBottom: 5,
    marginHorizontal: 15,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  paddingWrapper: {
    marginHorizontal: 15,
  },
  postsListContainer: {
    marginVertical: 20,
  },
})
