"use client";

import { useState } from "react";
import { ProductForm } from "./productForm";
import { useCreateProduct } from "@/features/products/queries/useProducts";
import { ProductRequsetDto } from "../../types/services";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CirclePlus } from "lucide-react";

type Props = {
  className?: string;
};

export default function CreateProduct({ className }: Props) {
  const [open, setOpen] = useState(false);

  const { mutateAsync, isPending } = useCreateProduct();

  async function onSubmit(values: ProductRequsetDto) {
    await mutateAsync(values);
    setOpen(false);
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className={className}>
          <CirclePlus /> add product
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add product</SheetTitle>
          <SheetDescription>add product or some stuff...</SheetDescription>
        </SheetHeader>
        <ProductForm
          className="px-4"
          onSubmit={onSubmit}
          isPending={isPending}
          defaultValues={{
            title: "",
            desc: "",
            imgUrl: "",
            active: true,
            category: "tech",
            stock: undefined as unknown as number,
            price: undefined as unknown as number,
          }}
        />

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
