import { Button } from "@/components/ui/button";
import { useGetCarts } from "../queries/useCart";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function CartNavButton() {
  const { data, isPending, isError } = useGetCarts();
  if (isPending) return "loading";
  if (isError) return "error";
  return (
    <Button asChild variant={"outline"}>
      <Link href={"/cart"} className="flex items-center gap-1">
        <ShoppingCart size={16} /> +{data.length} item at Cart
      </Link>
    </Button>
  );
}
