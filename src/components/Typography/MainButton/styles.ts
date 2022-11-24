import { StyleSheet } from "react-native";
import { windowWidth } from "../../../constants";

import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
  mainButton: {
    paddingVertical: 10,
    width: windowWidth * 0.8,
    marginBottom: 14,
    borderRadius: 3,
  },
  green: {
    backgroundColor: theme.backgroundColors.green,
  },
  red: {
    backgroundColor: theme.backgroundColors.red,
  },
  primary: {
    color: "#0d1b2a",
  },
  primary200: {
    color: "#1b263b",
  },
  secondary: {
    color: "#3c096c",
  },
});
