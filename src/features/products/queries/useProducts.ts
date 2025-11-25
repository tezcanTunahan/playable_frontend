import { useMutation, useQuery } from "@tanstack/react-query";
import { createProduct, getProdcuts } from "../services/products";
import { toast } from "sonner";

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      toast("product added succesfuly.");
    },
  });
};

export const useGetProdcuts = () => {
  return useQuery({
    queryKey: ["prodcuts"],
    queryFn: getProdcuts,
  });
};
