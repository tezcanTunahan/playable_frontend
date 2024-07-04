import React from "react";
import LoginForm from "@/components/loginForm";
import Link from "next/link";
import RegisterForm from "@/components/registerForm";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-10">
        <h1 className="text-4xl font-semibold">
          Welcome to{" "}
          <Link href="/" className="text-purple-500">
            Playable Factory!
          </Link>
        </h1>
        <RegisterForm />
        <span>
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}
