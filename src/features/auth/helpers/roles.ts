import { DecodeTokenDtoSchema } from "../types/token";

export const decodeToken = (accessToken: string) => {
  const payload = JSON.parse(atob(accessToken.split(".")[1]));
  return DecodeTokenDtoSchema.parse(payload);
};
