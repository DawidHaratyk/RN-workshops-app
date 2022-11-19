import { Text } from "react-native";
import React, { ReactNode } from "react";

import { theme } from "../../../theme/theme";
import { styles } from "./styles";

interface BodyProps {
  children: ReactNode;
  variant: "large" | "small";
  color?: keyof typeof theme.colors;
}

export default function Body({
  children,
  variant,
  color = "primary",
}: BodyProps) {
  return (
    <Text
      style={[
        styles.text,
        styles[variant],
        { color: theme.colors[color], fontFamily: "sans-serif" },
      ]}
    >
      {children}
    </Text>
  );
}
