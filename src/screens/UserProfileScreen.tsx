import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { UserImageCircle } from "../components/UserImageCircle/UserImageCircle";
import { Body } from "../components/Typography/Body/Body";
import { PostsDisplayedTypeToggler } from "../components/PostsDisplayedTypeToggler/PostsDisplayedTypeToggler";
import { SafeAreaView } from "react-native-safe-area-context";
import { PostsList } from "../components/PostsList/PostsList";
import { PostProps } from "../types";

// const postsData: PostProps[] = [
//   {
//     name: "name 1",
//     image: require("../images/graphic1.jpg"),
//     amountOfLikes: 8,
//     commentAuthor: "Somebody 1",
//     comment: "XDZXDXDXDXDXD",
//     id: 1,
//   },
//   {
//     name: "name 2",
//     image: require("../images/graphic1.jpg"),
//     amountOfLikes: 14,
//     commentAuthor: "Somebody 2",
//     comment: "XDZXDXDXDXDXDXDXDXDXDXDXD",
//     id: 2,
//   },
//   {
//     name: "name 3",
//     image: require("../images/graphic1.jpg"),
//     amountOfLikes: 10,
//     commentAuthor: "Somebody 3",
//     comment: "XDZXDXDXDXDXD",
//     id: 3,
//   },
//   {
//     name: "name 4",
//     image: require("../images/graphic1.jpg"),
//     amountOfLikes: 14,
//     commentAuthor: "Somebody 4",
//     comment: "XDZXDXDXDXDXD",
//     id: 4,
//   },
// ];

export const UserProfileScreen = ({ route }: any) => {
  console.log(route.params.userId);

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
      {/* <PostsList
        data={postsData}
        postDisplayType={
          isEntirePostShown ? "show-entire-content" : "show-image-only"
        }
      /> */}
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
