import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  userImageCircle: {
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  small: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  medium: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  large: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
