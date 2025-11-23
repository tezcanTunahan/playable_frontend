import z from "zod";

export const LoginRequestDtoSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});
export type LoginRequestDto = z.infer<typeof LoginRequestDtoSchema>;

export const LoginResponseDtoSchema = z.object({
  accessToken: z.string(),
});
export type LoginResponseDto = z.infer<typeof LoginResponseDtoSchema>;
