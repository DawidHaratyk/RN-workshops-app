import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { PostProps, PostPropsWithOptionalId } from '../../types'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { PostInformations } from '../PostInformations/PostInformations'
import { Body } from '../Typography/Body/Body'
import { supabase } from '../../../supabase'
import { useQuery } from '@tanstack/react-query'
import { Header } from '../Typography/Header/Header'

export const getPostData = async (postId: number, creator_uuid: string) => {
  const [likesResponse, userPostCreatorResponse, commentsResponse] =
    await Promise.all([
      supabase
        .from('likes')
        .select('*', { count: 'exact' })
        .eq('post_id', postId),
      supabase.from('users').select().eq('uuid', creator_uuid).single(),
      supabase
        .from('comments')
        .select('*', { count: 'exact' })
        .eq('post_id', postId),
    ])

  const commentAuthorResponse = await supabase
    .from('users')
    .select()
    .eq(
      'uuid',
      commentsResponse?.data?.length && commentsResponse.data[0].creator_uuid
    )
    .single()

  return {
    likes: likesResponse.count,
    postAuthor: `${
      typeof userPostCreatorResponse.data?.first_name === 'string'
        ? userPostCreatorResponse.data?.first_name
        : 'Imie'
    } ${
      typeof userPostCreatorResponse.data?.last_name === 'string'
        ? userPostCreatorResponse.data?.last_name
        : 'Nazwisko'
    }`,
    comments: commentsResponse.data,
    lastCommentAuthor: `${commentAuthorResponse.data?.first_name} ${commentAuthorResponse.data?.last_name}`,
  }
}

export const PostWithEntireContent = ({
  archived_at,
  created_at,
  creator_uuid,
  description,
  id,
  image_url,
}: PostProps) => {
  const navigation = useNavigation()

  const { data, isLoading, refetch } = useQuery(['post', id], () =>
    getPostData(id, creator_uuid)
  )

  const goToPostDetailsScreen = () =>
    navigation.navigate('PostDetails', {
      postId: id,
    })

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch])
  )

  return (
    <Pressable
      style={styles.postWithEntireContent}
      onPress={goToPostDetailsScreen}
    >
      <Body title={data?.postAuthor as string} variant="large" />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image_url
              ? image_url
              : 'https://i.pinimg.com/280x280_RS/9e/36/c8/9e36c8ae6b12cd6cec3b1de2591da9e4.jpg',
          }}
          style={styles.image}
        />
      </View>
      <PostInformations
        amountOfLikes={data?.likes ?? 0}
        commentAuthor={data?.lastCommentAuthor ? data?.lastCommentAuthor : ''}
        comment={data?.comments ? data?.comments[0]?.body : null}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  postWithEntireContent: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  imageContainer: {
    overflow: 'hidden',
    marginVertical: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
})
