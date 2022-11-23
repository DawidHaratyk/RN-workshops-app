import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserImageCircle } from '../components/UserImageCircle/UserImageCircle'
import { Body } from '../components/Typography/Body/Body'
import { PostInformations } from '../components/PostInformations/PostInformations'
import { PostCommentsList } from '../components/PostCommentsList/PostCommentsList'
import { InputWithSubmitOption } from '../components/InputWithSubmitOption/InputWithSubmitOption'
import { windowHeight } from '../constants'
import { supabase } from '../../supabase'
import { useQuery } from '@tanstack/react-query'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { Header } from '../components/Typography/Header/Header'

export interface Comment {
  body: string
  creator_uuid: string
  id: number
}

export interface PostDetails {
  id: number
  created_at: Date
  description: string
  image_url: string
  comments: Comment[]
}

export interface PostData {
  error?: any
  data: PostDetails
  count?: any
  status: number
  statusText: string
}

const getPostDetails = async (postId: number) => {
  const postDetailsResponse = await supabase
    .from('posts')
    .select(
      'id, created_at, creator_uuid, description, image_url, comments ( body, creator_uuid, id )'
    )
    .eq('id', postId)
    .is('archived_at', null)
    .single()

  const userResponse = await supabase
    .from('users')
    .select()
    .eq('uuid', postDetailsResponse.data?.creator_uuid)
    .single()

  return {
    postDetailsResponse: postDetailsResponse,
    userResponse: userResponse.data,
  }
}

export const PostDetailsScreen = ({ route }: any) => {
  const postId: number = route.params.postId

  const { data, isLoading } = useQuery(['postDetails', postId], () =>
    getPostDetails(postId)
  )

  const imgUrl = data?.postDetailsResponse?.data?.image_url

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.postDetailsContainer}>
            <Image
              source={{
                uri: imgUrl
                  ? imgUrl
                  : 'https://i.pinimg.com/280x280_RS/9e/36/c8/9e36c8ae6b12cd6cec3b1de2591da9e4.jpg',
              }}
              style={styles.postDetailsImage}
            />
            <View style={styles.postDetailsContent}>
              <View style={styles.postDetailsImageContainer}>
                <UserImageCircle
                  image="https://i.pinimg.com/280x280_RS/9e/36/c8/9e36c8ae6b12cd6cec3b1de2591da9e4.jpg"
                  size="medium"
                />
                <Body
                  title={
                    data?.userResponse?.first_name
                      ? data?.userResponse?.first_name
                      : 'Noname'
                  }
                  variant="small"
                />
              </View>
              <View>
                <PostInformations
                  amountOfLikes={
                    data?.postDetailsResponse.count
                      ? data?.postDetailsResponse.count
                      : 0
                  }
                  commentAuthor="Title"
                  comment={data?.postDetailsResponse?.data?.description}
                />
              </View>
            </View>
            {data?.postDetailsResponse?.data?.comments && (
              <PostCommentsList
                commentsList={data.postDetailsResponse.data.comments}
              />
            )}
            <View style={styles.postInputContainer}>
              <InputWithSubmitOption
                value=""
                onChangeText={() => null}
                placeholder="comment"
              />
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postDetailsContainer: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    height: windowHeight,
  },
  postDetailsImage: {
    width: '100%',
    height: '35%',
  },
  postDetailsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  postDetailsImageContainer: {
    marginRight: 10,
  },
  postInputContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
})
