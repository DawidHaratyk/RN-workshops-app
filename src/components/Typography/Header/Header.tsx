import { Text, TextStyle } from "react-native";
import React from "react";
import { theme } from "../../../theme/theme";
import { styles } from "./styles";

interface HeaderProps {
  title: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5";
  color?: keyof typeof theme.colors;
  additionalStyles?: TextStyle;
}

export const Header = ({
  title,
  variant,
  color = "primary",
  additionalStyles,
}: HeaderProps) => {
  return (
    <Text
      style={[
        styles.h2,
        styles[variant],
        {
          color: theme.colors[color],
          fontFamily: "sans-serif",
          textAlign: "center",
        },
        additionalStyles,
      ]}
    >
      {title}
    </Text>
  );
};
