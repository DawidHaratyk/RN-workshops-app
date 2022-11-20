import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { Header } from "../Typography/Header/Header";
import { useNavigation } from "@react-navigation/native";
import { windowHeight } from "../../constants";
import { MainButton } from "../Typography/MainButton/MainButton";

export const Welcome = () => {
  const navigation = useNavigation();

  const goToLoginPage = () => navigation.navigate("Login");
  // how to type react-navigation in typescript

  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.welcomeContent}>
        <Header title="Welcome" variant="h4" />
        <MainButton
          title="Start Your Journey"
          backgroundColor="green"
          textColor="white"
          onPress={goToLoginPage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight,
  },
  welcomeContent: {
    justifyContent: "space-between",
    height: "20%",
  },
});
