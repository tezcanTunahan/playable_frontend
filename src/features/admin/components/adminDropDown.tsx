"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, User } from "lucide-react";
import Logout from "@/features/auth/components/logout";

export default function AdminDropDown() {
  return (
    <DropdownMenu>
      <Button variant="ghost" className="flex w-full justify-between" asChild>
        <DropdownMenuTrigger>
          <div className="flex gap-2 items-center">
            <User />
            Admin
          </div>
          <ChevronDown className="ml-2 h-4 w-4" />
        </DropdownMenuTrigger>
      </Button>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Logout className="w-full" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
