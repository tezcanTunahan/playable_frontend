"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useAdminGetOrders } from "../queries/useOrder";

export default function AdminOrders() {
  const { data, isPending, isError } = useAdminGetOrders();

  if (isPending) return "loading";
  if (isError) return "error";

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">user ID</TableHead>
          <TableHead>title</TableHead>
          <TableHead>Desc</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item._id}>
            <TableCell>{item.userId}</TableCell>
            <TableCell className="font-medium">{item.product.title}</TableCell>
            <TableCell>{item.product.desc}</TableCell>
            <TableCell>{item.product.category}</TableCell>
            <TableCell className="text-right">{item.quantity}</TableCell>
            <TableCell className="text-right">$ {item.product.price}</TableCell>
            <TableCell className="text-right">
              $ {item.product.price * item.quantity}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
