import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="">
      <Navbar className="" />
      <main className="mt-20">{children}</main>
    </div>
  );
}
