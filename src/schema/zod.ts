import { object, string } from "zod";

export const signInSchema = object({
  email: string()
    .nonempty("Email is required")
    .min(1, "Email is required")
    .email("Invalid email"),

  password: string()
    .min(1, "Password is required")
    .min(6, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const signUpSchema = object({
  email: string()
    .nonempty("Email is required")
    .min(1, "Email is required")
    .email("Invalid email"),

  password: string()
    .min(1, "Password is required")
    .min(6, "Password must be more than 6 characters")
    .max(32, "Password must be less than 32 characters"),

  confirmPassword: string().min(1, "Confirm password is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"],
});