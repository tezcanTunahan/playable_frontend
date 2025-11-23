import { publicApiRequest } from "@/lib/apiRequest";
import { AUTH_ENDPOINTS } from "../constants/endpoints";
import {
  LoginRequestDto,
  LoginResponseDto,
  LoginResponseDtoSchema,
} from "../types/services";

export const login = async (
  loginRequest: LoginRequestDto
): Promise<LoginResponseDto> => {
  const response = await publicApiRequest({
    url: AUTH_ENDPOINTS.LOGIN,
    data: loginRequest,
    method: "POST",
  });
  return LoginResponseDtoSchema.parse(response.data);
};
