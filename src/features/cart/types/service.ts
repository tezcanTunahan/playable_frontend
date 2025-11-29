import z from "zod";

export const CartRequestDtoSchema = z.object({
  productId: z.string(),
  quantity: z.number(),
});

export type CartRequestDto = z.infer<typeof CartRequestDtoSchema>;

export const ProductDtoSchema = z.object({
  _id: z.string(),
  title: z.string(),
  desc: z.string(),
  imgUrl: z.string(),
  price: z.number(),
  category: z.string(),
});

export const CartResponseDtoSchema = z.array(
  z.object({
    _id: z.string(),
    userId: z.string(),
    product: ProductDtoSchema,
    quantity: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    __v: z.number(),
  })
);
export type CartResponseDto = z.infer<typeof CartResponseDtoSchema>;
