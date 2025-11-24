import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../services/products";
import { toast } from "sonner";

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      toast("product added succesfuly.");
    },
  });
};
