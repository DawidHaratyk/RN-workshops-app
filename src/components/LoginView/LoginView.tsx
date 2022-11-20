import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Header } from "../Typography/Header/Header";
import { useAuth } from "../../contexts/AuthContext";
import { MainButton } from "../Typography/MainButton/MainButton";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../Input/Input";

export const LoginView = () => {
  const { login } = useAuth();
  const navigation = useNavigation();

  const goToRegisterScreen = () => navigation.navigate("Register");

  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginHeader}>
        <Header title="Login" variant="h4" />
      </View>
      <View>
        <View style={styles.loginInputs}>
          <Input value="" onChangeText={() => null} placeholder="email" />
          <Input value="" onChangeText={() => null} placeholder="password" />
        </View>
        <View>
          <MainButton title="Login" backgroundColor="green" onPress={login} />
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
});
