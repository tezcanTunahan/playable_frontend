// hooks/useRequireRole.ts
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import { RoleDto } from "@/features/auth/types/token";

export function useRequireRole(requiredRole: RoleDto) {
  const router = useRouter();
  const accessToken = useAuthStore((s) => s.accessToken);
  const role = useAuthStore((s) => s.role);

  useEffect(() => {
    if (!accessToken) {
      router.replace("/login");
      return;
    }
    if (role !== requiredRole) {
      router.replace("/unauthorized");
    }
  }, [accessToken, role, requiredRole, router]);
}
