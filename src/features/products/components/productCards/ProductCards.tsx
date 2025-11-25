"use client";
import { useState } from "react";
import { useGetProdcuts } from "../../queries/useProducts";
import { Button } from "@/components/ui/button";
import TablePagination from "../../../../components/pagination";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function ProductCards({ className }: Props) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data, isPending, isError, refetch } = useGetProdcuts(page, pageSize);
  if (isPending) return "loading";
  if (isError) return <Button onClick={() => refetch()}>try again</Button>;

  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-row flex-wrap gap-16 mb-8 w-full">
        {data.data.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </div>

      <TablePagination
        className="ml-auto w-fit"
        page={page}
        pageSize={pageSize}
        setPage={setPage}
        setPageSize={setPageSize}
        totalElements={data.totalElements}
      />
    </div>
  );
}
