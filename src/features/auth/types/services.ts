import z from "zod";

export const UserRequestDtoSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});
export type UserRequestDto = z.infer<typeof UserRequestDtoSchema>;

export const LoginResponseDtoSchema = z.object({
  accessToken: z.string(),
});
export type LoginResponseDto = z.infer<typeof LoginResponseDtoSchema>;
