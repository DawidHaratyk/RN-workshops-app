import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { UserImageCircle } from "../components/UserImageCircle/UserImageCircle";
import { Body } from "../components/Typography/Body/Body";
import { PostsDisplayedTypeToggler } from "../components/PostsDisplayedTypeToggler/PostsDisplayedTypeToggler";
import { SafeAreaView } from "react-native-safe-area-context";
import { PostsList } from "../components/PostsList/PostsList";
import { PostProps } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/supabase/getPosts";

export const UserProfileScreen = ({ route }: any) => {
  const { data, isLoading } = useQuery(["posts"], getPosts);

  const posts = data ?? [];

  // console.log(route.params.userId);

  const [isEntirePostShown, setIsEntirePostShown] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.userImageContainer}>
        <UserImageCircle
          image="https://i.pinimg.com/280x280_RS/9e/36/c8/9e36c8ae6b12cd6cec3b1de2591da9e4.jpg"
          size="large"
          additionalStyles={{ marginBottom: 6 }}
        />
        <Body title="somebody" variant="large" />
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
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userImageContainer: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  togglerContainer: {
    alignItems: "flex-end",
    marginHorizontal: 30,
    marginBottom: 8,
  },
});
