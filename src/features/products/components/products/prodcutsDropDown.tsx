"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";

export default function ProdcutsDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Delete</DropdownMenuItem>
        <DropdownMenuItem>Update</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
