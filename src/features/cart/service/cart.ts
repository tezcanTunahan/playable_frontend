import { privateApiRequest } from "@/lib/apiRequest";
import { CART_ENDPOINTS } from "../constants/endpoints";
import { HttpMethod } from "@/config/types";
import {
  CartRequestDto,
  CartResponseDto,
  CartResponseDtoSchema,
} from "../types/service";

export const createCart = async (cartRequestDto: CartRequestDto) => {
  await privateApiRequest({
    url: CART_ENDPOINTS.DEFAULT,
    method: HttpMethod.POST,
    data: cartRequestDto,
  });
};

export const getCart = async (): Promise<CartResponseDto> => {
  const response = await privateApiRequest({
    url: CART_ENDPOINTS.DEFAULT,
    method: HttpMethod.GET,
  });
  return CartResponseDtoSchema.parse(response.data);
};

export const deleteCart = async (id: string) => {
  await privateApiRequest({
    url: CART_ENDPOINTS.BY_ID(id),
    method: HttpMethod.DELETE,
  });
};
