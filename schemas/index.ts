import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Email must be valid" }),
    password: z
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/, {
        message:
          "Password must contain at least: 1 uppercase letter, 1 lowercase, 1 special character, 1 number",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

export type SignUpSchemaProps = z.infer<typeof signUpSchema> & {
  confirmPassword?: string;
};
