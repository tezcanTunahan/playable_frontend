import { useMutation, useQuery } from "@tanstack/react-query";
import { createCart, deleteCart, getCart } from "../service/cart";
import { toast } from "sonner";
import { queryClient } from "@/lib/queryClient";

export const useCreateCart = () => {
  return useMutation({
    mutationFn: createCart,
    onSuccess: () => {
      toast("Add to cart succesfully");
      queryClient.invalidateQueries({
        queryKey: ["carts"],
      });
    },
  });
};

export const useGetCarts = () => {
  return useQuery({
    queryFn: getCart,
    queryKey: ["carts"],
  });
};

export const useDeleteCart = () => {
  return useMutation({
    mutationFn: deleteCart,
    onSuccess: () => {
      toast("Delete cart succesfully");
      queryClient.invalidateQueries({
        queryKey: ["carts"],
      });
    },
  });
};
