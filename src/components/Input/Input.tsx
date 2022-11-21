import { TextInput, TextStyle } from "react-native";
import React from "react";
import { styles } from "./styles";

interface InputProps {
  value: string;
  onChangeText: () => void;
  placeholder: string;
  onBlur?: () => void;
  additionalStyles?: TextStyle;
}

export const Input = ({
  value,
  onChangeText,
  placeholder,
  onBlur,
  additionalStyles,
}: InputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      style={[styles.input, additionalStyles]}
    />
  );
};
