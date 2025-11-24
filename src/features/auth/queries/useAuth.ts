// import { toast } from "sonner";

import {
  login,
  //  register
} from "@/features/auth/services/auth";
import type { LoginRequestDto } from "@/features/auth/types/services";

import { useAuthStore } from "@/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { decodeToken } from "../helpers/roles";

//   const useRegister = () => {
//     return useMutation({
//       mutationFn: register,
//       onSuccess: () => {
//         toast("Check your mails", {
//           description: "We send you a vefication code you have 3 min to use it",
//         });
//       },
//     });
//   };

export const useLogin = () => {
  return useMutation({
    mutationFn: (loginRequest: LoginRequestDto) => login(loginRequest),
    onSuccess: (data) => {
      const decode = decodeToken(data.accessToken);
      useAuthStore.getState().setAccessToken(data.accessToken);
      useAuthStore.getState().setRole(decode.role);
      // todo check if we need replace
      window.location.replace("/");
    },
    onError: () => {
      alert("user not found or smthng happen !");
      // toast("something went wrong!");
    },
  });
};
