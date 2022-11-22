import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { PostProps, PostPropsWithOptionalId } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { PostInformations } from "../PostInformations/PostInformations";
import { Body } from "../Typography/Body/Body";
import { supabase } from "../../../supabase";
import { useQuery } from "@tanstack/react-query";
import { Header } from "../Typography/Header/Header";

export const getPostData = async (postId: number, creator_uuid: string) => {
  const likesResponse = await supabase
    .from("likes")
    .select("*", { count: "exact" })
    .eq("post_id", postId);

  const userPostCreatorResponse = await supabase
    .from("users")
    .select()
    .eq("uuid", creator_uuid)
    .single();

  const commentsResponse = await supabase
    .from("comments")
    .select("*", { count: "exact" })
    .eq("post_id", postId);

  const commentAuthorResponse = await supabase
    .from("users")
    .select()
    .eq(
      "uuid",
      commentsResponse.data?.length && commentsResponse.data[0].creator_uuid
    )
    .single();

  return {
    likes: likesResponse.count,
    postAuthor: `${userPostCreatorResponse.data.first_name} ${userPostCreatorResponse.data.last_name}`,
    comments: commentsResponse.data,
    lastCommentAuthor: `${commentAuthorResponse.data.first_name} ${commentAuthorResponse.data.last_name}`,
  };
};

export const PostWithEntireContent = ({
  archived_at,
  created_at,
  creator_uuid,
  description,
  id,
  image_url,
}: PostProps) => {
  const navigation = useNavigation();

  const { data, isLoading } = useQuery(["post", id], () =>
    getPostData(id, creator_uuid)
  );

  // const userQuery = useQuery(["user", userUuid], () => getUser(userUuid));

  const goToPostDetailsScreen = () =>
    navigation.navigate("PostDetails", {
      postId: id,
    });

  if (isLoading) return <Header title="Loding..." variant="h4" />;

  return (
    <Pressable
      style={styles.postWithEntireContent}
      onPress={goToPostDetailsScreen}
    >
      <Body title={data?.postAuthor as string} variant="large" />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image_url,
          }}
          style={styles.image}
        />
      </View>
      <PostInformations
        amountOfLikes={data?.likes ?? 0}
        commentAuthor={data?.lastCommentAuthor ? data?.lastCommentAuthor : ""}
        comment={data?.comments?.length && data?.comments[0]?.body}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  postWithEntireContent: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 3,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  imageContainer: {
    overflow: "hidden",
    marginVertical: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
