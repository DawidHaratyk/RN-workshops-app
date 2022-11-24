import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UserProfile from "../components/UserProfile/UserProfile";

export const UserProfileScreen = ({ route }: any) => {
  const userUuid: string = route.params.userId;

  const [isEntirePostShown, setIsEntirePostShown] = useState(false);

  return (
    <SafeAreaView>
      <UserProfile
        isEntirePostShown={isEntirePostShown}
        setIsEntirePostShown={setIsEntirePostShown}
        userUuid={userUuid}
      />
      {/* <View style={styles.userImageContainer}>
        <UserImageCircle
          image={imageUrl}
          size="large"
          additionalStyles={{ marginBottom: 6 }}
        />
        <Body title={`${name} ${surname}`} variant="large" />
      </View>
      <View style={styles.togglerContainer}>
        <PostsDisplayedTypeToggler
          postDisplayType={
            isEntirePostShown ? "show-entire-content" : "show-image-only"
          }
          setIsEntirePostShown={setIsEntirePostShown}
        />
      </View>
      <PostsList
        data={posts}
        postDisplayType={
          isEntirePostShown ? "show-entire-content" : "show-image-only"
        }
      /> */}
    </SafeAreaView>
  );
};
