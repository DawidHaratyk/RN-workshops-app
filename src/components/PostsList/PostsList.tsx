import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { PostProps } from '../../types'
import { PostWithEntireContent } from '../PostWithEntireContent/PostWithEntireContent'
import { PostImage } from '../PostImage/PostImage'

interface PostsListProps {
  data: PostProps[]
  postDisplayType: 'show-entire-content' | 'show-image-only'
}

export const PostsList = ({ data, postDisplayType }: PostsListProps) => {
  console.log(data)

  // const getPostsList = () => {
  //   // how it works when i pass entire obj, do I have to type everything in the component or only props that I received in the component?
  //   if (postDisplayType === 'show-entire-content')
  //     return data.map((postObj) => <PostWithEntireContent {...postObj} />)
  //   else if (postDisplayType === 'show-image-only')
  //     return (
  //       <View style={styles.postsImagesContainer}>
  //         {/* {data.map((postObj) => (
  //           <PostImage {...postObj} />
  //         ))} */}
  //       </View>
  //     )
  // }

  const renderItem = (item: any) => {
    console.log(item.item)

    if (postDisplayType === 'show-entire-content')
      return <PostWithEntireContent {...item.item} />
    // if (postDisplayType === 'show-image-only')
    // return (
    // <View style={styles.postsImagesContainer}>
    //   {data.map((postObj) => (
    //     <PostImage image={postObj.image_url} />
    //   ))}
    // </View>
    // )
  }

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.postsListContainer}
        data={data}
        // keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  postsListContainer: {
    paddingHorizontal: 8,
  },
  postsImagesContainer: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
