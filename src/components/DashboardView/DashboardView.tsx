import { StyleSheet, View } from 'react-native'
import React from 'react'
import { PostsList } from '../PostsList/PostsList'
import { StoriesList } from '../StoriesList/StoriesList'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../../api/supabase/getPosts'
import { Header } from '../Typography/Header/Header'

export const DashboardView = () => {
  const { data, isLoading } = useQuery(['posts'], getPosts)

  const posts = data ?? []

  if (isLoading) return <Header title="Loading..." variant="h4" />

  return (
    <View style={styles.dashboardContainer}>
      <StoriesList />
      {isLoading ? (
        <Header title="Loading..." variant="h4" />
      ) : (
        <PostsList data={posts} postDisplayType="show-entire-content" />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  dashboardContainer: {
    paddingVertical: 15,
    paddingBottom: 160,
  },
})
