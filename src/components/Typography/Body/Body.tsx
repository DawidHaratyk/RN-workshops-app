import { Text } from "react-native";
import React from "react";
import { theme } from "../../../theme/theme";
import { styles } from "./styles";

interface BodyProps {
  title: string;
  variant: "large" | "small";
  color?: keyof typeof theme.colors;
}

export const Body = ({ title, variant, color = "primary" }: BodyProps) => {
  return (
    <Text
      style={[
        styles.text,
        styles[variant],
        { color: theme.colors[color], fontFamily: "sans-serif" },
      ]}
    >
      {title}
    </Text>
  );
};
