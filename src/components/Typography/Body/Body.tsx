import { Text } from "react-native";
import React, { ReactNode } from "react";

import { theme } from "../../../theme/theme";
import { styles } from "./styles";

interface BodyProps {
  children: ReactNode;
  variant: "large" | "small";
  color?: string;
}

export default function Body({
  children,
  variant,
  color = theme.colors.primary,
}: BodyProps) {
  return (
    <Text style={[styles.text, styles[variant], { color }]}>{children}</Text>
  );
}
