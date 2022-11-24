import { Image, Pressable, ViewStyle } from "react-native";
import React from "react";
import { styles } from "./styles";

interface UserImageCircleProps {
  image: string | null;
  size: "small" | "medium" | "large";
  onPress?: () => void;
  additionalStyles?: ViewStyle;
}

export const UserImageCircle = ({
  image,
  size,
  onPress,
  additionalStyles,
}: UserImageCircleProps) => {
  const choosedImage = image
    ? image
    : "https://i.pinimg.com/280x280_RS/9e/36/c8/9e36c8ae6b12cd6cec3b1de2591da9e4.jpg";

  return (
    <Pressable
      style={[styles.userImageCircle, styles[size], additionalStyles]}
      onPress={onPress}
    >
      <Image source={{ uri: choosedImage }} style={styles.image} />
    </Pressable>
  );
};
