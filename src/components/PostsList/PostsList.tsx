import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { PostProps } from "../../types";
import { PostWithEntireContent } from "../PostWithEntireContent/PostWithEntireContent";
import { PostImage } from "../PostImage/PostImage";
import { supabase } from "../../../supabase";

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
    else return <PostImage image={item.image_url} postId={item.id} />;
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      key={postDisplayType === "show-entire-content" ? 1 : 3}
      numColumns={postDisplayType === "show-entire-content" ? 1 : 3}
      contentContainerStyle={
        styles[
          postDisplayType === "show-entire-content"
            ? "postsWithContentContainer"
            : "postsWithImageOnlyContainer"
        ]
      }
      data={data}
      keyExtractor={(item, index) =>
        item.created_at ? item.created_at : index.toString()
      }
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  postsWithContentContainer: {
    paddingHorizontal: 8,
  },
  postsWithImageOnlyContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    // flexWrap: "wrap",
    paddingHorizontal: 8,
  },
});
