import { privateApiRequest } from "@/lib/apiRequest";
import { ProductRequsetDto } from "../types/services";
import { PRODUCTS_ENDPOINTS } from "../constants/endpoints";
import { HttpMethod } from "@/config/types";

export const createProduct = async (
  productRequsetDto: ProductRequsetDto
): Promise<void> => {
  await privateApiRequest({
    url: PRODUCTS_ENDPOINTS.DEFAULT,
    method: HttpMethod.POST,
    data: productRequsetDto,
  });
};
