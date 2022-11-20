import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { PostPropsWithOptionalId } from "../../types";
import { Body } from "../Typography/Body/Body";
import { useNavigation } from "@react-navigation/native";
import { PostInformations } from "../PostInformations/PostInformations";

export const PostWithEntireContent = ({
  name,
  image,
  amountOfLikes,
  commentAuthor,
  comment,
}: PostPropsWithOptionalId) => {
  const navigation = useNavigation();

  const goToPostDetailsScreen = () => navigation.navigate("PostDetails");

  return (
    <Pressable
      style={styles.postWithEntireContent}
      onPress={goToPostDetailsScreen}
    >
      <Body title={name} variant="large" />
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <PostInformations
        amountOfLikes={amountOfLikes}
        commentAuthor={commentAuthor}
        comment={comment}
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
