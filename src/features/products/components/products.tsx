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
import { useGetProdcuts } from "../queries/useProducts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import ProdcutsDropDown from "./prodcutsDropDown";

export default function Products() {
  const { data, isPending, isError, refetch } = useGetProdcuts();

  if (isPending) return "loading";
  if (isError) return <Button onClick={() => refetch()}>try again</Button>;

  return (
    <Table className="w-full">
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
              <TableCell className="text-right ">
                <ProdcutsDropDown />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
