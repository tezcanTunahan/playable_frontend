import React from "react";
import { useDeleteCart } from "../queries/useCart";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

type Props = {
  id: string;
};

export default function DeleteCart({ id }: Props) {
  const { mutateAsync } = useDeleteCart();

  return (
    <Button
      onClick={async () => {
        await mutateAsync(id);
      }}
      variant={"destructive"}
      size={"sm"}
    >
      <Trash />
    </Button>
  );
}
