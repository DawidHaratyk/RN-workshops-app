import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { Header } from "../components/Typography/Header/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../theme/theme";
import { Welcome } from "../components/Welcome/Welcome";

export const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <Welcome />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
