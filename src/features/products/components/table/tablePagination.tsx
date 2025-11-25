import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

type Props = {
  pageSize: number;
  setPageSize: (e: number) => void;
  page: number;
  setPage: (e: number) => void;
  totalElements: number;
  className?: string;
};

export default function TablePagination({
  page,
  setPage,
  pageSize,
  setPageSize,
  totalElements,
  className,
}: Props) {
  const lastPage = Math.ceil(totalElements / pageSize);
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-muted-foreground">Rows per page</span>
      <Select
        value={pageSize.toString()}
        onValueChange={(e) => setPageSize(Number(e))}
      >
        <SelectTrigger className="mr-8" size="sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="15">15</SelectItem>
          <SelectItem value="20">20</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant={"secondary"}
        size={"icon-sm"}
        disabled={page == 1}
        onClick={() => setPage(1)}
      >
        <ChevronsLeft />
      </Button>
      <Button
        variant={"secondary"}
        size={"icon-sm"}
        disabled={page == 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        <ChevronLeft />
      </Button>
      <p className="text-muted-foreground">
        Page <b className="text-neutral-700">{page}</b> of{" "}
        {Math.ceil(totalElements / pageSize)}
      </p>
      <Button
        variant={"secondary"}
        size={"icon-sm"}
        disabled={page == lastPage}
        onClick={() => setPage(page + 1)}
      >
        <ChevronRight />
      </Button>
      <Button
        variant={"secondary"}
        size={"icon-sm"}
        disabled={page == lastPage}
        onClick={() => setPage(lastPage)}
      >
        <ChevronsRight />
      </Button>
    </div>
  );
}
