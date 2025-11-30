import { useMutation, useQuery } from "@tanstack/react-query";
import { createOrder, getOrders } from "../services/order";
import { queryClient } from "@/lib/queryClient";
import { toast } from "sonner";

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: createOrder,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["carts"] });
      await queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast("order created szuccesfully");
    },
  });
};

export const useGetOrders = () => {
  return useQuery({
    queryFn: getOrders,
    queryKey: ["orders"],
  });
};
