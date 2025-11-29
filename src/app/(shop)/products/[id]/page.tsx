"use client";
import { Button } from "@/components/ui/button";
import AddCart from "@/features/cart/components/addCart";
import ProductImages from "@/features/product/components/productImages";
import { useGetProductById } from "@/features/products/queries/useProducts";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id ?? "";

  const { data, isPending, isError } = useGetProductById(id);

  if (isPending) return "loading";
  if (isError) return "error";
  return (
    <div className="flex justify-between ">
      <ProductImages data={data} className="w-5/12 " />
      <div className="w-6/12">
        <h1 className="font-medium mb-8">{data.title}</h1>
        <div className="space-y-4">
          <p className="">{data.desc}</p>
          <p className="text-2xl font-bold ">${data.price}</p>
          <p className="">Category: {data.category}</p>
          <p>Stock: {data.stock}</p>

          <AddCart productId={id} stock={data.stock} />
          <Button className="w-full" variant={"outline"} asChild>
            <Link href={"/cart"} className="flex items-center gap-1">
              <ShoppingCart size={16} />
              Go to cart
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
