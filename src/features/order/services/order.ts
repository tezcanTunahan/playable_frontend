import { privateApiRequest } from "@/lib/apiRequest";
import { ORDER_ENDPOINTS } from "../constants/endpoints";
import { HttpMethod } from "@/config/types";

export const createOrder = async () => {
  await privateApiRequest({
    url: ORDER_ENDPOINTS.DEFAULT,
    method: HttpMethod.POST,
  });
};
