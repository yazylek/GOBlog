import z from "zod";

export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled" })
    .email("This is not a valid email."),
  username: z.string().min(3).max(30),
  password: z
    .string()
    .min(3, "Password must contain at least 3 character(s)")
    .max(30)
    .regex(/[0-9]/, "Password needs to have at least one numeric character")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password need to have at least one special character"
    ),
});

export const signInSchema = z.object({
  email: z.string().email("This is not a valid email."),
  password: z.string(),
});
