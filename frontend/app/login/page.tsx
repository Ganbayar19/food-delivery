import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8, "Weak password. Use numbers and symbols.")
  .regex(/[0-9]/, "Weak password. Use numbers and symbols.")
  .regex(/[a-zA-Z]/, "Weak password. Use numbers and symbols.");

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: passwordSchema,
});
