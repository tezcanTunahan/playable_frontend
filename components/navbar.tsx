import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex w-full items-start justify-between p-10">
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

      <Link href="/login" className="text-xl font-semibold">
        Login
      </Link>
    </div>
  );
}
