import { Button } from "@/components/ui/button";
import { useCreateOrder } from "../queries/useOrder";

export default function CreateOrder() {
  const { mutateAsync } = useCreateOrder();
  return (
    <Button
      onClick={async () => {
        await mutateAsync();
      }}
    >
      Create order
    </Button>
  );
}
