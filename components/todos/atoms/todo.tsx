import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CiTrash } from "react-icons/ci";

type TodoProps = {
  title: string;
  desc: string;
  status: boolean;
  id: string;
  deleteTodo: ({ id }: { id: string }) => void;
  changeTodoStatus: ({ id }: { id: string }) => void;
};

export default function Todo({
  title,
  desc,
  status,
  deleteTodo,
  changeTodoStatus,
  id,
}: TodoProps) {
  return (
    <div className="flex items-center justify-between bg-neutral-700 p-3 text-white">
      <div>
        <h1 className="font-semibold">{title}</h1>
        <p className="text-xs">{desc}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Checkbox
          id="terms2"
          checked={status}
          className="h-8 w-8"
          onClick={() => changeTodoStatus({ id })}
        />
        <Button
          variant="destructive"
          size="icon"
          className=""
          onClick={() => deleteTodo({ id })}
        >
          <CiTrash />
        </Button>
      </div>
    </div>
  );
}
