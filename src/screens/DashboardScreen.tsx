import { StyleSheet } from "react-native";
import React from "react";
import { DashboardView } from "../components/DashboardView/DashboardView";
import { SafeAreaView } from "react-native-safe-area-context";

export const DashboardScreen = () => {
  return (
    <SafeAreaView>
      <DashboardView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
