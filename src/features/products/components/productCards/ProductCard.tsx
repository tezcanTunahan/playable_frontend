/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ProductResponse } from "../../types/services";

export default function ProductCard(productResponse: ProductResponse) {
  return (
    <Link href={`products/${productResponse._id}`}>
      <img
        src={productResponse.imgUrl}
        className="min-h-64"
        alt={productResponse.title + " image"}
        width={200}
        height={100}
        onError={(e) =>
          (e.currentTarget.src =
            "https://dukkan.marmaracizgi.com.tr/rick-and-morty-sayi-39-rick-and-morty-marmara-cizgi-904-45-B.jpg")
        }
      />
      <div className="flex  justify-between">
        <b>{productResponse.title}</b>
        <p>{productResponse.price} $</p>
      </div>
      <p className="text-muted-foreground">
        {productResponse.desc.length > 20
          ? productResponse.desc.slice(0, 20) + "..."
          : productResponse.desc}
      </p>
      <p className="text-muted-foreground text-xs">
        {productResponse.category}
      </p>
    </Link>
  );
}
