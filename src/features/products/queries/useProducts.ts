import { useMutation, useQuery } from "@tanstack/react-query";
import { createProduct, getProdcuts } from "../services/products";
import { toast } from "sonner";
import { queryClient } from "@/lib/queryClient";

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      toast("product added succesfuly.");
      queryClient.invalidateQueries({
        queryKey: ["prodcuts"],
      });
    },
  });
};

export const useGetProdcuts = (page: number, pageSize: number) => {
  return useQuery({
    queryKey: ["prodcuts", page, pageSize],
    queryFn: () => getProdcuts(page, pageSize),
  });
};
