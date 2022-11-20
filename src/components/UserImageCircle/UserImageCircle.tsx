import { Image, ImageSourcePropType, Pressable, ViewStyle } from "react-native";
import React from "react";
import { styles } from "./styles";

interface UserImageCircleProps {
  image: ImageSourcePropType;
  size: "small" | "medium" | "large";
  onPress?: () => void;
  additionalStyles?: ViewStyle;
  // is ViewStyle type good type here?
}

export const UserImageCircle = ({
  image,
  size,
  onPress,
  additionalStyles,
}: UserImageCircleProps) => {
  return (
    <Pressable
      style={[styles.userImageCircle, styles[size], additionalStyles]}
      onPress={onPress}
    >
      <Image source={image} style={styles.image} />
    </Pressable>
  );
};
