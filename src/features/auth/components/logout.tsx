import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { useAuthStore } from "@/stores/useAuthStore";

type Props = {
  className?: string;
};

export default function Logout({ className }: Props) {
  const { handleLogOut } = useAuthStore();
  return (
    <Button
      className={cn("flex justify-start font-normal", className)}
      onClick={() => handleLogOut()}
      size={"sm"}
      variant={"ghost"}
    >
      Log out
    </Button>
  );
}
