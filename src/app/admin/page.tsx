"use client";
import { useAuthStore } from "@/stores/useAuthStore";

export default function Page() {
  const { accessToken } = useAuthStore();
  console.log(accessToken);

  return <div>admin page</div>;
}
