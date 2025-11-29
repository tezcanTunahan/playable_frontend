import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../services/order";
import { queryClient } from "@/lib/queryClient";

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
  });
};
