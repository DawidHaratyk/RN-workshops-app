import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

interface PostImageProps {
  image: string | null;
}

export const PostImage = ({ image }: PostImageProps) => {
  const choosedImage = image
    ? image
    : "https://i.pinimg.com/280x280_RS/9e/36/c8/9e36c8ae6b12cd6cec3b1de2591da9e4.jpg";

  return (
    <TouchableOpacity style={styles.postImageContainer}>
      <Image source={{ uri: choosedImage }} style={styles.postImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postImageContainer: {
    borderWidth: 2,
    borderColor: "black",
    width: 100,
    height: 100,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
});
