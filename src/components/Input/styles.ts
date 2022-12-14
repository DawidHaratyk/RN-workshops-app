import { StyleSheet } from "react-native";
import { windowWidth } from "../../constants";

export const styles = StyleSheet.create({
  input: {
    width: windowWidth * 0.8,
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 2,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 5,
    minHeight: 40,
  },
  submitIcon: {
    position: "absolute",
    top: "25%",
    right: 10,
  },
});
