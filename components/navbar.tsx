import Link from "next/link";
import React from "react";
import { useAuth } from "@/context/authContext";
import { Button } from "./ui/button";

export default function Navbar() {
  const { authState, username, logout } = useAuth();
  return (
    <div className="mb-20 flex w-full items-start justify-between">
      <div className="flex flex-col">
        <Link href="/" className="text-2xl font-bold">
          PLAYABLE <span className="text-purple-500">FACTORY</span>
        </Link>
        <span>
          case study created by{" "}
          <Link
            href="https://www.linkedin.com/in/tunahantezcan/"
            className="text-blue-500"
          >
            @tunahantzcn
          </Link>
        </span>
      </div>

      {authState.authenticated ? (
        <div className="flex items-center">
          <span className="mr-4">{username}</span>
          <Button onClick={logout}>Logout</Button>
        </div>
      ) : (
        <div className="flex items-center">
          <Link href="/login" className="mr-4">
            Login
          </Link>
          <Link href="/register">Register</Link>
        </div>
      )}
    </div>
  );
}
