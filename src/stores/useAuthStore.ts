import Cookies from "js-cookie";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { RoleDto } from "@/features/auth/types/token";
import { queryClient } from "@/lib/queryClient";

type UserState = {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  role: RoleDto | null;
  setRole: (role: RoleDto) => void;
  handleLogOut: () => void;
};

export const useAuthStore = create(
  persist<UserState>(
    (set) => {
      return {
        accessToken: null,
        setAccessToken: (accessToken: string) => set({ accessToken }),
        role: null,
        setRole: (role: RoleDto) => set({ role }),
        handleLogOut: () => {
          set({ accessToken: null });
          queryClient.clear();
        },
      };
    },
    {
      name: "auth-storage",
      storage: createJSONStorage(() => ({
        setItem: (name, value) =>
          Cookies.set(name, value, {
            path: "/",
            secure: true,
            sameSite: "Strict",
            expires: 30,
          }),
        getItem: (name) => Cookies.get(name) ?? null,
        removeItem: (name) => {
          Cookies.remove(name, { path: "/" });
          return null;
        },
      })),
    }
  )
);
