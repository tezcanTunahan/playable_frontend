import { Input } from "@/components/ui/input";
import React from "react";

export default function Search({
  setSearch,
}: {
  setSearch: (value: string) => void;
}) {
  return (
    <Input
      className=""
      placeholder="Search todos"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
