import { privateApiRequest } from "@/lib/apiRequest";
import {
  ProductRequsetDto,
  ProductsResponse,
  ProductsResponseSchema,
} from "../types/services";
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

export const getProdcuts = async (
  page: number,
  pageSize: number
): Promise<ProductsResponse> => {
  const response = await privateApiRequest({
    url: PRODUCTS_ENDPOINTS.DEFAULT,
    method: HttpMethod.GET,
    params: {
      page,
      pageSize,
    },
  });

  return ProductsResponseSchema.parse(response.data);
};
