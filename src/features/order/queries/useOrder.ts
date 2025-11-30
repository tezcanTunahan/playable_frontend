import { useMutation, useQuery } from "@tanstack/react-query";
import { adminGetOrders, createOrder, getOrders } from "../services/order";
import { queryClient } from "@/lib/queryClient";
import { toast } from "sonner";

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: createOrder,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["carts"] });
      await queryClient.invalidateQueries({ queryKey: ["orders"] });
      await queryClient.invalidateQueries({ queryKey: ["product"] });

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

export const useAdminGetOrders = () => {
  return useQuery({
    queryFn: adminGetOrders,
    queryKey: ["adminOrders"],
  });
};
