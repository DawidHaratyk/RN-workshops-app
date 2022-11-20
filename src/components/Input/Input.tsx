import { TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";

interface InputProps {
  value: string;
  onChangeText: () => void;
  placeholder: string;
}

export const Input = ({ value, onChangeText, placeholder }: InputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};
