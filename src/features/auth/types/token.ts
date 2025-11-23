import z from "zod";

export const RoleDtoSchema = z.enum(["admin", "user"]);
export type RoleDto = z.infer<typeof RoleDtoSchema>;

export const DecodeTokenDtoSchema = z.object({
  id: z.string(),
  role: RoleDtoSchema,
  iat: z.number(),
  exp: z.number(),
});
