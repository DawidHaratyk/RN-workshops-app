import { Image, Pressable, StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import { PostProps } from "../../types";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { PostInformations } from "../PostInformations/PostInformations";
import { Body } from "../Typography/Body/Body";
import { useQuery } from "@tanstack/react-query";
import { getPostData } from "../../api/supabase/getPostData";

export const PostWithEntireContent = ({
  // archived_at,
  // created_at,
  creator_uuid,
  // description,
  id,
  image_url,
}: PostProps) => {
  const { navigate } = useNavigation();

  const { data, refetch } = useQuery(["post", id], () =>
    getPostData(id, creator_uuid)
  );

  const goToPostDetailsScreen = () =>
    navigate("PostDetails", {
      postId: id,
    });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  const choosedImage = image_url
    ? image_url
    : "https://i.pinimg.com/280x280_RS/9e/36/c8/9e36c8ae6b12cd6cec3b1de2591da9e4.jpg";

  return (
    <Pressable
      style={styles.postWithEntireContent}
      onPress={goToPostDetailsScreen}
    >
      <Body
        title={data?.postAuthor ? data?.postAuthor : "Imię Nazwisko"}
        variant="large"
      />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: choosedImage,
          }}
          style={styles.image}
        />
      </View>
      <PostInformations
        amountOfLikes={data?.likes ?? 0}
        commentAuthor={data?.lastCommentAuthor ? data?.lastCommentAuthor : ""}
        comment={data?.comments ? data?.comments[0]?.body : null}
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
