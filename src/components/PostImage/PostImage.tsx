import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

interface PostImageProps {
  image: ImageSourcePropType;
}

export const PostImage = ({ image }: PostImageProps) => {
  return (
    <TouchableOpacity style={styles.postImageContainer}>
      <Image source={image} style={styles.postImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postImageContainer: {
    borderWidth: 2,
    borderColor: "black",
    flexBasis: "30%",
    height: 120,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
});
