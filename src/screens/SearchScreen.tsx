import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { InputWithSubmitOption } from '../components/InputWithSubmitOption/InputWithSubmitOption'
import { Header } from '../components/Typography/Header/Header'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../api/supabase/getPosts'
import { PostsList } from '../components/PostsList/PostsList'
import { getUsers } from '../api/supabase/getUsers'
import { UserImageCircle } from '../components/UserImageCircle/UserImageCircle'
import { Body } from '../components/Typography/Body/Body'
import { windowHeight } from '../constants'

export const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('')

  const { data, isLoading } = useQuery(['posts'], getPosts)

  const usersQuery = useQuery(['users'], getUsers)

  const posts = data ?? []

  const handleFilteringPostsAndPeople = () => {
    const filteredPosts = posts.filter((post) =>
      post.description?.toLowerCase().includes(searchValue)
    )

    console.log(filteredPosts)
  }

  const displayPostsOrLoading = isLoading ? (
    <Header title="Loading..." variant="h5" />
  ) : (
    <PostsList data={posts} postDisplayType="show-image-only" />
  )

  return (
    <SafeAreaView>
      <View style={styles.postsListContainer}>
        <View style={styles.searchInputContainer}>
          <InputWithSubmitOption
            value={searchValue}
            onChangeText={setSearchValue}
            placeholder="search"
            onPress={handleFilteringPostsAndPeople}
          />
        </View>
        <Header
          title="Posts"
          variant="h5"
          additionalStyles={{
            textAlign: 'left',
            marginLeft: 15,
            marginBottom: 3,
          }}
        />
        <ScrollView style={styles.postsContainer}>
          {displayPostsOrLoading}
        </ScrollView>
      </View>
      <View style={styles.paddingWrapper}>
        <Header
          title="People"
          variant="h5"
          additionalStyles={{ textAlign: 'left', marginBottom: 3 }}
        />
        <ScrollView style={styles.peopleListContainer}>
          {usersQuery.data?.map((userObj) => (
            <View style={styles.userContainer}>
              <UserImageCircle
                image={userObj.image_url}
                size="small"
                additionalStyles={{ marginRight: 8 }}
              />
              <Body
                title={`${userObj.first_name ? userObj.first_name : 'Name'} ${
                  userObj.last_name ? userObj.last_name : 'Surname'
                }`}
                variant="small"
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchInputContainer: {
    marginTop: 20,
    marginBottom: 15,
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
    marginTop: 10,
    marginBottom: 20,
  },
  peopleListContainer: {
    maxHeight: windowHeight * 0.35,
  },
  postsContainer: {
    maxHeight: windowHeight * 0.3,
  },
})
