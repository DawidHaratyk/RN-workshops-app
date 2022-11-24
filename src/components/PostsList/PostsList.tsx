import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { PostProps } from "../../types";
import { PostWithEntireContent } from "../PostWithEntireContent/PostWithEntireContent";
import { PostImage } from "../PostImage/PostImage";

interface PostsListProps {
  data: PostProps[];
  postDisplayType: "show-entire-content" | "show-image-only";
}

interface PostProp {
  item: PostProps;
}

export const PostsList = ({ data, postDisplayType }: PostsListProps) => {
  const renderItem = ({ item }: PostProp) => {
    if (postDisplayType === "show-entire-content")
      return <PostWithEntireContent {...item} />;
    else return <PostImage image={item.image_url} />;
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={
        styles[
          postDisplayType === "show-entire-content"
            ? "postsWithContentContainer"
            : "postsWithImageOnlyContainer"
        ]
      }
      data={data}
      // keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  postsWithContentContainer: {
    paddingHorizontal: 8,
  },
  postsWithImageOnlyContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    paddingHorizontal: 8,
  },
});
