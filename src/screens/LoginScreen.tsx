import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header } from "../components/Typography/Header/Header";
import { useAuth } from "../contexts/AuthContext";

export const LoginScreen = () => {
  const { isLogged, login } = useAuth();

  return (
    <View>
      <View>
        <Header variant="h4">Login</Header>
        <Button title="Go to MainApp" onPress={login} />
      </View>
      <View>
        <Text>FORM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
