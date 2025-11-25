"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Logo from "@/components/logo";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function LandingNavbar({ className }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 56);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 right-0 left-0 z-20 flex w-full items-center justify-between bg-white px-2 py-2  md:px-5",
        isScrolled && "border-b shadow-sm",
        className
      )}
    >
      <Logo className="" />

      <div className="flex gap-4">
        <Button variant={"ghost"} asChild>
          <Link href={"/login"}>Login</Link>
        </Button>

        <Button variant={"secondary"} asChild>
          <Link href={"/register"}>Register</Link>
        </Button>
      </div>
    </div>
  );
}
