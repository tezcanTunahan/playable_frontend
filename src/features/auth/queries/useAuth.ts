// import { toast } from "sonner";

import { login, register } from "@/features/auth/services/auth";
import type { UserRequestDto } from "@/features/auth/types/services";

import { useAuthStore } from "@/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { decodeToken } from "../helpers/roles";

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      // alert("register successfuly time to login");
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (userRequestDto: UserRequestDto) => login(userRequestDto),
    onSuccess: (data) => {
      const decode = decodeToken(data.accessToken);
      useAuthStore.getState().setAccessToken(data.accessToken);
      useAuthStore.getState().setRole(decode.role);
      // todo check if we need replace
      window.location.replace("/");
    },
    onError: () => {
      // alert("user not found or smthng happen !");
      // toast("something went wrong!");
    },
  });
};
