"use client";
import { Input } from "@/components/ui/input";
import React, { useMemo } from "react";

export default function Search({
  setSearch,
}: {
  setSearch: (value: string) => void;
}) {
  const debouncedSetSearch = useMemo(
    () => debounce(setSearch, 1000),
    [setSearch],
  );
  return (
    <Input
      className=""
      placeholder="Search todos"
      onChange={(e) => debouncedSetSearch(e.target.value)}
    />
  );
}

function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
