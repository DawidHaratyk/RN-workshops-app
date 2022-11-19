import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DashboardScreen } from "../screens/DashboardScreen";
import { PostDetailsScreen } from "../screens/PostDetailsScreen";
import { UserProfileScreen } from "../screens/UserProfileScreen";

const Stack = createNativeStackNavigator();
// check whether I can export Stack from another component

export const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
