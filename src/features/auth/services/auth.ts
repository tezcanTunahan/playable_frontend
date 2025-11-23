import { publicApiRequest } from "@/lib/apiRequest";
import { AUTH_ENDPOINTS } from "../constants/endpoints";
import {
  LoginRequest,
  LoginResponse,
  LoginResponseSchema,
} from "../types/services";

export const login = async (
  loginRequest: LoginRequest
): Promise<LoginResponse> => {
  const response = await publicApiRequest({
    url: AUTH_ENDPOINTS.LOGIN,
    data: loginRequest,
    method: "POST",
  });
  return LoginResponseSchema.parse(response.data);
};
