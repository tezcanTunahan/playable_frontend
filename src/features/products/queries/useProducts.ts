import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createProduct,
  deleteProduct,
  getProdcuts,
  getProductById,
  setProductActiviy,
  updateProduct,
} from "../services/products";
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

export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      toast("product updated succesfuly.");
      queryClient.invalidateQueries({
        queryKey: ["prodcuts"],
      });
    },
  });
};

export const useSetProductActivity = () => {
  return useMutation({
    mutationFn: setProductActiviy,
    onSuccess: () => {
      toast("product activity updated succesfuly.");
      queryClient.invalidateQueries({
        queryKey: ["prodcuts"],
      });
    },
  });
};

export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      toast("product deleted succesfuly.");
      queryClient.invalidateQueries({
        queryKey: ["prodcuts"],
      });
    },
  });
};

export const useGetProdcuts = (
  page: number,
  pageSize: number,
  search: string,
  minPrice: number,
  maxPrice: number,
  sortBy: "price" | "title" | "createdAt",
  sortOrder: "asc" | "desc",
  category: "tech" | "food" | "books" | "all"
) => {
  return useQuery({
    queryKey: [
      "prodcuts",
      page,
      pageSize,
      search,
      maxPrice,
      minPrice,
      sortBy,
      sortOrder,
      category,
    ],
    queryFn: () =>
      getProdcuts(
        page,
        pageSize,
        search,
        minPrice,
        maxPrice,
        sortBy,
        sortOrder,
        category
      ),
  });
};

export const useGetProductById = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: id != "",
  });
};
