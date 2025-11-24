import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../services/products";

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      alert("product added");
    },
  });
};
