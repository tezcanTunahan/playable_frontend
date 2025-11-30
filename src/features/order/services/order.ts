import { privateApiRequest } from "@/lib/apiRequest";
import { ORDER_ENDPOINTS } from "../constants/endpoints";
import { HttpMethod } from "@/config/types";
import { OrdersDto, OrdersDtoSchema } from "../types/services";

export const createOrder = async () => {
  await privateApiRequest({
    url: ORDER_ENDPOINTS.DEFAULT,
    method: HttpMethod.POST,
  });
};

export const getOrders = async (): Promise<OrdersDto> => {
  const response = await privateApiRequest({
    url: ORDER_ENDPOINTS.DEFAULT,
    method: HttpMethod.GET,
  });
  return OrdersDtoSchema.parse(response.data);
};
