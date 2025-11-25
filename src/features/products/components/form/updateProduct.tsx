"use client";

import { ProductForm } from "./productForm";
import {
  useGetProductById,
  useUpdateProduct,
} from "@/features/products/queries/useProducts";
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
} from "@/components/ui/sheet";

type Props = {
  id: string;
  open: boolean;
  setOpen: (val: boolean) => void;
};

export default function UpdateProduct({ id, open, setOpen }: Props) {
  const { mutateAsync, isPending: mutateIsPending } = useUpdateProduct();
  const { data, isPending, isError } = useGetProductById(id);

  if (isPending) return;
  if (isError) return "erorr";

  async function onSubmit(values: ProductRequsetDto) {
    await mutateAsync({
      id,
      productRequsetDto: values,
    });
    setOpen(false);
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Update product</SheetTitle>
          <SheetDescription>Update product or some stuff...</SheetDescription>
        </SheetHeader>

        <ProductForm
          className="px-4"
          onSubmit={onSubmit}
          isPending={mutateIsPending}
          defaultValues={{
            title: data.title,
            desc: data.desc,
            imgUrl: data.imgUrl,
            stock: data.stock,
            price: data.price,
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
