"use client";
import Landing from "@/components/landing";
import Navbar from "@/components/navbar";
import Todos from "@/components/todos/todos";
import { useAuth } from "@/context/authContext";
import api from "@/lib/api";
export default function Home() {
  const { authState } = useAuth();

  return (
    <main className="bg m-auto mt-10 flex w-10/12 flex-col">
      <Navbar />
      {authState.authenticated ? <Todos /> : <Landing />}
    </main>
  );
}
