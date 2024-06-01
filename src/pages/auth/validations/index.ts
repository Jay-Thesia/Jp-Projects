import * as yup from "yup";
export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .email("Enter the valid formatted email"),

    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
        "Password must contain 8 characters, one uppercase, one lowercase, one number and one special case character."
      ),
  })
  .required();
