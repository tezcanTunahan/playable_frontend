import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="">
      <Navbar className="" />
      <main className="mt-20 w-10/12 mx-auto">{children}</main>
    </div>
  );
}
