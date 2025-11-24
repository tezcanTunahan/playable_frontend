import { publicApiRequest } from "@/lib/apiRequest";
import { AUTH_ENDPOINTS } from "../constants/endpoints";
import {
  UserRequestDto,
  LoginResponseDto,
  LoginResponseDtoSchema,
} from "../types/services";

export const register = async (
  userRequestDto: UserRequestDto
): Promise<void> => {
  await publicApiRequest({
    url: AUTH_ENDPOINTS.REGISTER,
    data: userRequestDto,
    method: "POST",
  });
};

export const login = async (
  userRequest: UserRequestDto
): Promise<LoginResponseDto> => {
  const response = await publicApiRequest({
    url: AUTH_ENDPOINTS.LOGIN,
    data: userRequest,
    method: "POST",
  });
  return LoginResponseDtoSchema.parse(response.data);
};
