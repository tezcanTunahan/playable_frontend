import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <Link href="/" className={cn("font-semibold", className)}>
      Playable Factory
    </Link>
  );
}
