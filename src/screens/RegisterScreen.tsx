import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RegisterView } from "../components/RegisterView/RegisterView";

export const RegisterScreen = () => {
  return (
    <SafeAreaView>
      <RegisterView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
