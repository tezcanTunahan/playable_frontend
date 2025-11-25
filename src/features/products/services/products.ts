import { privateApiRequest } from "@/lib/apiRequest";
import {
  ProductRequsetDto,
  ProductResponse,
  ProductResponseSchema,
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

export const updateProduct = async ({
  id,
  productRequsetDto,
}: {
  id: string;
  productRequsetDto: ProductRequsetDto;
}): Promise<void> => {
  await privateApiRequest({
    url: PRODUCTS_ENDPOINTS.BY_ID(id),
    method: HttpMethod.PUT,
    data: productRequsetDto,
  });
};

export const setProductActiviy = async ({
  id,
  active,
}: {
  id: string;
  active: boolean;
}): Promise<void> => {
  await privateApiRequest({
    url: PRODUCTS_ENDPOINTS.BY_ID(id),
    method: HttpMethod.PATCH,
    data: { active },
  });
};

export const deleteProduct = async ({ id }: { id: string }): Promise<void> => {
  await privateApiRequest({
    url: PRODUCTS_ENDPOINTS.BY_ID(id),
    method: HttpMethod.DELETE,
  });
};

export const getProductById = async (id: string): Promise<ProductResponse> => {
  const response = await privateApiRequest({
    url: PRODUCTS_ENDPOINTS.BY_ID(id),
    method: HttpMethod.GET,
  });
  return ProductResponseSchema.parse(response.data);
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
