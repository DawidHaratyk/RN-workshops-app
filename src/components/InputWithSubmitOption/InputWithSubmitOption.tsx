import { TextInput, View } from "react-native";
import React from "react";
import { styles } from "../Input/styles";
import { AntDesign } from "@expo/vector-icons";
import { windowWidth } from "../../constants";

interface InputWithSubmitOptionProps {
  value: string;
  onChangeText: () => void;
  placeholder: string;
  onPress?: () => void;
}

export const InputWithSubmitOption = ({
  value,
  onChangeText,
  placeholder,
  onPress,
}: InputWithSubmitOptionProps) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, { width: windowWidth * 0.88 }]}
      />
      <AntDesign
        name="check"
        size={24}
        color="black"
        style={styles.submitIcon}
      />
    </View>
  );
};
