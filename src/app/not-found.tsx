import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Origami } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen bg-gray-50 px-4">
      <Origami className="size-20 text-gray-400" />
      <h1 className="text-6xl">404</h1>
      <h2 className="text-muted-foreground">
        Sorry, the page you are looking for does not exist.
      </h2>
      <Button asChild>
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  );
}
