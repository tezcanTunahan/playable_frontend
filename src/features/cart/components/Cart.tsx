"use client";
import { ArrowRight, Trash } from "lucide-react";
/* eslint-disable @next/next/no-img-element */

import { useGetCarts } from "../queries/useCart";
import { Button } from "@/components/ui/button";
import DeleteCart from "./deleteCart";

export default function Cart() {
  const { data, isPending, isError } = useGetCarts();
  if (isPending) return "laoding";
  if (isError) return "error";

  const totalPrice = data.reduce((acc, curr) => {
    return acc + curr.product.price * curr.quantity;
  }, 0);

  return (
    <div className="flex gap-16">
      <div className="w-1/2 border flex gap-4 flex-col  rounded-xl px-4 py-8 ">
        <h2>Cart</h2>
        {data.map((item) => {
          return (
            <div
              key={item._id}
              className="flex gap-16 justify-between items-center "
            >
              <img
                src={item.product.imgUrl}
                className="w-1/6"
                alt={item.product.title + " image"}
                width={200}
                height={100}
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://dukkan.marmaracizgi.com.tr/rick-and-morty-sayi-39-rick-and-morty-marmara-cizgi-904-45-B.jpg")
                }
              />
              <div>
                <h4>{item.product.title}</h4>
                <p className="text-muted-foreground">{item.product.desc}</p>
                <p>quantitiy: {item.quantity}</p>
                <b>$ {item.product.price}</b>
              </div>

              <div>
                <DeleteCart id={item.product._id} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-1/2 flex border rounded-2xl  flex-col px-4 py-8 gap-4">
        <h3>Cart details</h3>
        <p>total: {totalPrice}</p>
        <Button className="w-full ">
          Contunie <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
