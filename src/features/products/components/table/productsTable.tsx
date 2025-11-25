"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useGetProdcuts } from "@/features/products/queries/useProducts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import ProdcutsDropDown from "@/features/products/components/table/prodcutsDropDown";
import { useState } from "react";
import TablePagination from "./tablePagination";

export default function ProductsTable() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data, isPending, isError, refetch } = useGetProdcuts(page, pageSize);

  if (isPending) return "loading";
  if (isError) return <Button onClick={() => refetch()}>try again</Button>;

  return (
    <>
      <div className="">
        <Table className="w-full mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox />
              </TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.data.map((item) => {
              return (
                <TableRow key={item._id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={item.imgUrl} />
                      <AvatarFallback>?</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.desc}</TableCell>
                  <TableCell className="text-right">
                    <ProdcutsDropDown id={item._id} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        className="ml-auto w-fit"
        page={page}
        pageSize={pageSize}
        setPage={setPage}
        setPageSize={setPageSize}
        totalElements={data.totalElements}
      />
    </>
  );
}
