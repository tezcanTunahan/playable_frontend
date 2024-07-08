import { Button } from "@/components/ui/button";
import React from "react";

export default function Pagination({
  page,
  totalPages,
  nextPage,
  prevPage,
}: {
  page: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Button onClick={prevPage} disabled={page === 1}>
          Prev
        </Button>
        <span>{page + " of " + totalPages + " pages"}</span>

        <Button onClick={nextPage} disabled={page === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
}
