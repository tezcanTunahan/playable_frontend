import z from "zod";

export const ProductRequsetDtoSchema = z.object({
  title: z.string().min(3),
  desc: z.string().min(3),
  imgUrl: z.string().min(3),
  stock: z.number().min(1),
});
export type ProductRequsetDto = z.infer<typeof ProductRequsetDtoSchema>;
