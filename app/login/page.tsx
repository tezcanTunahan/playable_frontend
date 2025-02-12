import React from "react";
import LoginForm from "@/components/loginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-10">
        <h1 className="text-4xl font-semibold">
          Welcome to{" "}
          <Link href="/" className="text-purple-500">
            Playable Factory!
          </Link>
        </h1>
        <LoginForm />
        <span>
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
}
