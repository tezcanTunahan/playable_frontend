"use client";
import { useState } from "react";
import { useGetProdcuts } from "../../queries/useProducts";
import { Button } from "@/components/ui/button";
import TablePagination from "../../../../components/pagination";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";
import useDebounce from "@/hooks/useDebounce";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  className?: string;
};

export default function ProductCards({ className }: Props) {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const debouncePriceRange = useDebounce(priceRange, 800);
  const [sortBy, setSortBy] = useState<"price" | "title" | "createdAt">(
    "createdAt"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const { data, isPending, isError, refetch } = useGetProdcuts(
    page,
    pageSize,
    debounceSearch,
    debouncePriceRange[0],
    debouncePriceRange[1],
    sortBy,
    sortOrder
  );
  if (isPending) return "loading";
  if (isError) return <Button onClick={() => refetch()}>try again</Button>;

  return (
    <div className={cn("w-full flex gap-16", className)}>
      <div className="flex gap-5 flex-col">
        <h4>Filter</h4>
        <div className="flex flex-col gap-4">
          <Label>Search</Label>
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="🔎 Search..."
            className="max-w-64"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label>
            Price range: min: {priceRange[0]}$ - max: {priceRange[1]}$
          </Label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            className="w-64"
            max={1000}
            step={10}
          />
        </div>
        <h4>Sort</h4>
        <div className="space-y-2">
          <Label>Sort by</Label>
          <Select
            value={sortBy}
            onValueChange={(v: "price" | "title" | "createdAt") => setSortBy(v)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="createdAt">Created At</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Sort direction</Label>
          <Select
            value={sortOrder}
            onValueChange={(v: "asc" | "desc") => setSortOrder(v)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="asc">asc</SelectItem>
                <SelectItem value="desc">desc</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
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
    </div>
  );
}
