import { StyleSheet } from "react-native";

import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
  },
  large: {
    fontSize: theme.fontSizes.bodyLarge,
  },
  small: {
    fontSize: theme.fontSizes.bodySmall,
  },
  primary: {
    color: "#0d1b2a",
    // change color to a variable (better approach)
  },
  primary200: {
    color: "#1b263b",
  },
  secondary: {
    color: "#3c096c",
  },
});
