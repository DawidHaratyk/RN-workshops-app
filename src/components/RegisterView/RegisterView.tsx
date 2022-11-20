import { StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../Typography/Header/Header";
import { MainButton } from "../Typography/MainButton/MainButton";
import { Input } from "../Input/Input";

export const RegisterView = () => {
  const navigation = useNavigation();

  const goToLoginPage = () => navigation.navigate("Login");

  return (
    <View style={styles.registerContainer}>
      <View style={styles.registerHeader}>
        <Header title="Register" variant="h4" />
      </View>
      <View>
        <View style={styles.registerInputs}>
          <Input value="" onChangeText={() => null} placeholder="email" />
          <Input value="" onChangeText={() => null} placeholder="password" />
          <Input
            value=""
            onChangeText={() => null}
            placeholder="confirm password"
          />
        </View>
        <View>
          <MainButton
            title="Register"
            backgroundColor="green"
            onPress={goToLoginPage}
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
});
