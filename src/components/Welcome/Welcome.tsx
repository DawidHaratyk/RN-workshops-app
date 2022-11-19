import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { Header } from "../Typography/Header/Header";
import { useNavigation } from "@react-navigation/native";
import { windowHeight } from "../../constants";

export const Welcome = () => {
  const navigation = useNavigation();

  // const goToLoginPage = () => navigation.navigate("Login");
  // how to type react-navigation in typescript

  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.welcomeContent}>
        <Header variant="h4">Welcome</Header>
        {/* make buttons components */}
        <Button title="Start your journey" />
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
