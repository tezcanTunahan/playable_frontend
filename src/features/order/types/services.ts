import { z } from "zod";

//  this one is repeted :C
export const ProductDtoSchema = z.object({
  _id: z.string(),
  title: z.string(),
  desc: z.string(),
  imgUrl: z.string(),
  active: z.boolean(),
  price: z.number(),
  stock: z.number(),
  category: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  __v: z.number(),
});

export const OrdersDtoSchema = z.array(
  z.object({
    _id: z.string(),
    userId: z.string(),
    product: ProductDtoSchema,
    quantity: z.number(),
    __v: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
  })
);
export type OrdersDto = z.infer<typeof OrdersDtoSchema>;
