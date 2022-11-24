import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../../../theme/theme";
import { styles } from "./styles";

interface MainButtonProps {
  title: string;
  backgroundColor: "green" | "red";
  textColor?: keyof typeof theme.colors;
  onPress?: () => void;
}

export const MainButton = ({
  title,
  backgroundColor,
  textColor = "white",
  onPress,
}: MainButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.mainButton,
        {
          backgroundColor: theme.backgroundColors[backgroundColor],
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          color: theme.colors[textColor],
          fontSize: 18,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
