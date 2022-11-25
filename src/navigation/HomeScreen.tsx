import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DashboardScreen } from "../screens/DashboardScreen";
import { PostDetailsScreen } from "../screens/PostDetailsScreen";
import { UserProfileScreen } from "../screens/UserProfileScreen";

const Stack = createNativeStackNavigator();

export const HomeScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
    </Stack.Navigator>
  );
};
