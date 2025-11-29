import { Button } from "@/components/ui/button";
import { useCreateCart } from "../queries/useCart";
import { useState } from "react";
import { Label } from "@/components/ui/label";

type Props = {
  productId: string;
  stock: number;
};

export default function AddCart({ stock, productId }: Props) {
  const { mutateAsync, isPending } = useCreateCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-4">
      <Label>Quantity</Label>
      <div className="flex items-center gap-4">
        <Button
          variant={"outline"}
          onClick={() => {
            setQuantity((prev) => Math.max(prev - 1, 1));
          }}
        >
          -
        </Button>
        <p>{quantity}</p>
        <Button
          variant={"outline"}
          onClick={() => {
            setQuantity((prev) => Math.min(prev + 1, stock));
          }}
        >
          +
        </Button>
      </div>
      <Button
        className="w-full"
        onClick={() => {
          mutateAsync({
            productId,
            quantity,
          });
        }}
        disabled={isPending}
      >
        + add to cart
      </Button>
    </div>
  );
}
