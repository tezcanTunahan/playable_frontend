import { PaginatedSchema } from "@/config/types";
import z from "zod";

export const ProductRequsetDtoSchema = z.object({
  title: z.string().min(3),
  desc: z.string().min(3),
  imgUrl: z.string().min(3),
  active: z.boolean(),
  stock: z.number().min(1),
  price: z.number().min(1),
});
export type ProductRequsetDto = z.infer<typeof ProductRequsetDtoSchema>;

export const ProductResponseSchema = z.object({
  _id: z.string(),
  title: z.string(),
  desc: z.string(),
  imgUrl: z.string(),
  active: z.boolean(),
  price: z.number(),
  stock: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  __v: z.number(),
});
export type ProductResponse = z.infer<typeof ProductResponseSchema>;

export const ProductsResponseSchema = PaginatedSchema(ProductResponseSchema);
export type ProductsResponse = z.infer<typeof ProductsResponseSchema>;
