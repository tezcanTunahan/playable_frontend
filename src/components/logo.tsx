import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <Link
      href="/"
      className={cn(
        "font-semibold max-w-fit text-base sm:text-lg  md:text-xl lg:text-2xl",
        className
      )}
    >
      Playable Factory
    </Link>
  );
}
