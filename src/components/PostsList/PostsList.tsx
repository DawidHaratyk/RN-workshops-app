import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { PostProps } from "../../types";
import { PostWithEntireContent } from "../PostWithEntireContent/PostWithEntireContent";
import { PostImage } from "../PostImage/PostImage";

interface PostsListProps {
  data: PostProps[];
  postDisplayType: "show-entire-content" | "show-image-only";
}

export const PostsList = ({ data, postDisplayType }: PostsListProps) => {
  const getPostsList = () => {
    // how it works when i pass entire obj, do I have to type everything in the component or only props that I received in the component?
    if (postDisplayType === "show-entire-content")
      return data.map((postObj) => <PostWithEntireContent {...postObj} />);
    else if (postDisplayType === "show-image-only")
      return (
        <View style={styles.postsImagesContainer}>
          {/* {data.map((postObj) => (
            <PostImage {...postObj} />
          ))} */}
        </View>
      );
  };

  return (
    <ScrollView
      style={styles.postsListContainer}
      showsVerticalScrollIndicator={false}
    >
      {getPostsList()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postsListContainer: {
    paddingHorizontal: 8,
  },
  postsImagesContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
