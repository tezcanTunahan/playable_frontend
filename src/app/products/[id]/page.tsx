"use client";
import { Button } from "@/components/ui/button";
import ProductImages from "@/features/product/components/productImages";
import { useGetProductById } from "@/features/products/queries/useProducts";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id ?? "";

  const { data, isPending, isError } = useGetProductById(id);

  if (isPending) return "loading";
  if (isError) return "error";
  return (
    <div className="flex mt-30 justify-between  w-8/12  mx-auto">
      <ProductImages data={data} className="w-5/12 " />
      <div className="w-6/12">
        <h1 className="font-medium mb-8">{data.title}</h1>
        <div className="space-y-4">
          <p className="">{data.desc}</p>
          <p className="text-3xl font-bold ">${data.price}</p>
          <p className="">Category: {data.category}</p>
          <p>Stock: {data.stock}</p>
          <Button className="w-full mt-20">+ Add to Cart</Button>
          <Button className="w-full" variant={"outline"}>
            + Buy This item
          </Button>
        </div>
      </div>
    </div>
  );
}
