import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Welcome } from "../components/Welcome/Welcome";

export const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <Welcome />
    </SafeAreaView>
  );
};
