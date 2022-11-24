import { StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../Typography/Header/Header";
import { MainButton } from "../Typography/MainButton/MainButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { theme } from "../../theme/theme";
import { registerValidation } from "../../auth/validations";
import { signUpUser } from "../../auth/helpers/signUpUser";
import FormInput from "../FormInput/FormInput";
import { RegisterInputValues } from "../../types";

export const RegisterView = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
    defaultValues: {
      email: "",
      password: "",
      confirmedPassword: "",
    },
  });

  const handleCreateUser = (values: RegisterInputValues) => {
    signUpUser(values);

    navigation.navigate("Login");
  };

  return (
    <View style={styles.registerContainer}>
      <View style={styles.registerHeader}>
        <Header title="Register" variant="h4" />
      </View>
      <View>
        <View style={styles.registerInputs}>
          <FormInput control={control} errors={errors["email"]} name="email" />
          <FormInput
            control={control}
            errors={errors["password"]}
            name="password"
          />
          <FormInput
            control={control}
            errors={errors["confirmedPassword"]}
            name="confirmedPassword"
          />
        </View>
        <View>
          <MainButton
            title="Register"
            backgroundColor="green"
            onPress={handleSubmit((values) => handleCreateUser(values))}
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
  redText: {
    color: theme.colors.red,
  },
  inputAndAlertContainer: {
    marginBottom: 14,
  },
});
