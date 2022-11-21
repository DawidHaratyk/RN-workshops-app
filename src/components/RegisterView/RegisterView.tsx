import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../Typography/Header/Header";
import { MainButton } from "../Typography/MainButton/MainButton";
import { Input } from "../Input/Input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { theme } from "../../theme/theme";
import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const supabase = createClient(
  "https://jvneoinifrjqltrrxesb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2bmVvaW5pZnJqcWx0cnJ4ZXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1NTAwOTYsImV4cCI6MTk4MjEyNjA5Nn0.YYIUu3UKyNAxEh5Y5_elQxkV3uWHvu3aOjDS4wmyqvg",
  {
    auth: {
      detectSessionInUrl: false,
      storage: AsyncStorage,
    },
  }
);

const validation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8, "Must be 8 characters or more").required(),
  confirmedPassword: yup
    .string()
    .min(8, "Must be 8 characters or more")
    .required(),
});

const signUpUser = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: "example@email.com",
    password: "example-password",
  });

  console.log(data, error);
};

export const RegisterView = () => {
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
      confirmedPassword: "",
    },
  });

  const goToLoginPage = () => {
    const user = signUpUser();
    console.log(user);

    navigation.navigate("Login");
  };

  return (
    <View style={styles.registerContainer}>
      <View style={styles.registerHeader}>
        <Header title="Register" variant="h4" />
      </View>
      <View>
        <View style={styles.registerInputs}>
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

          <View style={styles.inputAndAlertContainer}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder="confirm password"
                  onBlur={onBlur}
                />
              )}
              name="confirmedPassword"
            />
            {errors.confirmedPassword && (
              <Text style={styles.redText}>
                {errors.confirmedPassword.message}
              </Text>
            )}
          </View>
        </View>
        <View>
          <MainButton
            title="Register"
            backgroundColor="green"
            onPress={handleSubmit(goToLoginPage)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  registerHeader: {
    marginBottom: 80,
  },
  registerInputs: {
    marginBottom: 15,
  },
  redText: {
    color: theme.colors.red,
  },
  inputAndAlertContainer: {
    marginBottom: 14,
  },
});
