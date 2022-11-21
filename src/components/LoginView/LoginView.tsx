import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header } from "../Typography/Header/Header";
import { useAuth } from "../../contexts/AuthContext";
import { MainButton } from "../Typography/MainButton/MainButton";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../Input/Input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { theme } from "../../theme/theme";

const validation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8, "Must be 8 characters or more").required(),
});

export const LoginView = () => {
  const { login } = useAuth();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const goToRegisterScreen = () => navigation.navigate("Register");

  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginHeader}>
        <Header title="Login" variant="h4" />
      </View>
      <View>
        <View style={styles.loginInputs}>
          <View style={styles.inputAndAlertContainer}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder="email"
                  onBlur={onBlur}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={styles.redText}>{errors.email.message}</Text>
            )}
          </View>

          <View style={styles.inputAndAlertContainer}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder="password"
                  onBlur={onBlur}
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text style={styles.redText}>{errors.password.message}</Text>
            )}
          </View>
        </View>
        <View>
          <MainButton
            title="Login"
            backgroundColor="green"
            onPress={handleSubmit(login)}
          />
          <MainButton
            title="Sign up"
            backgroundColor="red"
            onPress={goToRegisterScreen}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  loginHeader: {
    marginBottom: 80,
  },
  loginInputs: {
    marginBottom: 15,
  },
  inputAndAlertContainer: {
    marginBottom: 14,
  },
  redText: {
    color: theme.colors.red,
  },
});
