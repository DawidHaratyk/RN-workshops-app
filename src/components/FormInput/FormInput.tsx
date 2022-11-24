import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "../Input/Input";
import { theme } from "../../theme/theme";

const FormInput = ({ control, errors, name }: any) => {
  return (
    <View style={styles.inputAndAlertContainer}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            placeholder={name}
            onBlur={onBlur}
          />
        )}
        name={name}
      />
      {errors && <Text style={styles.redText}>{errors.message}</Text>}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputAndAlertContainer: {
    marginBottom: 14,
  },
  redText: {
    color: theme.colors.red,
  },
});
