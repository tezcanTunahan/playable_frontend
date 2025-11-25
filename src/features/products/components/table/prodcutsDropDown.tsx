"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Pencil } from "lucide-react";
import UpdateProduct from "../form/updateProduct";
import { useState } from "react";
import { useDeleteProduct } from "../../queries/useProducts";

type Props = {
  id: string;
};

export default function ProdcutsDropDown({ id }: Props) {
  const { mutateAsync, isPending } = useDeleteProduct();

  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Ellipsis />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Pencil /> update product
          </DropdownMenuItem>
          <DropdownMenuItem
            variant="destructive"
            onClick={() => {
              mutateAsync({ id });
            }}
            disabled={isPending}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {open && <UpdateProduct id={id} open={open} setOpen={setOpen} />}
    </>
  );
}
