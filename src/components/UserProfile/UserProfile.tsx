import { StyleSheet, View } from 'react-native'
import React from 'react'
import { UserImageCircle } from '../UserImageCircle/UserImageCircle'
import { Body } from '../Typography/Body/Body'
import { PostsDisplayedTypeToggler } from '../PostsDisplayedTypeToggler/PostsDisplayedTypeToggler'
import { PostsList } from '../PostsList/PostsList'
import { useUserProfileValues } from '../../hooks/useUserProfileValues'
import { useAuth } from '../../contexts/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'

const UserProfile = ({
  isEntirePostShown,
  setIsEntirePostShown,
  userUuid,
}: any) => {
  const { loggedUserUuid } = useAuth()

  const { posts, name, surname, imageUrl } = useUserProfileValues(
    userUuid ? userUuid : loggedUserUuid
  )

  return (
    <SafeAreaView>
      <View style={styles.userImageContainer}>
        <UserImageCircle
          image={imageUrl}
          size="large"
          additionalStyles={{ marginBottom: 6 }}
        />
        <Body title={`${name} ${surname}`} variant="large" />
      </View>
      <View style={styles.togglerContainer}>
        {userUuid && (
          <PostsDisplayedTypeToggler
            postDisplayType={
              isEntirePostShown ? 'show-entire-content' : 'show-image-only'
            }
            setIsEntirePostShown={setIsEntirePostShown}
          />
        )}
      </View>
      <PostsList
        data={posts}
        postDisplayType={
          isEntirePostShown ? 'show-entire-content' : 'show-image-only'
        }
      />
    </SafeAreaView>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  userImageContainer: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  togglerContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 30,
    marginBottom: 8,
  },
})
