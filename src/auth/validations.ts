import * as yup from "yup";

export const loginValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8, "Must be 8 characters or more").required(),
});

export const registerValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8, "Must be 8 characters or more").required(),
  confirmedPassword: yup
    .string()
    .min(8, "Must be 8 characters or more")
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
