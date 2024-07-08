import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CiTrash } from "react-icons/ci";
import Image from "next/image";

type TodoProps = {
  todo: {
    _id: string;
    title: string;
    desc: string;
    status: boolean;
    img: string;
  };
  deleteTodo: ({ id }: { id: string }) => Promise<void>;
  changeTodoStatus: ({ id }: { id: string }) => Promise<void>;
};

export default function Todo({
  todo,
  deleteTodo,
  changeTodoStatus,
}: TodoProps) {
  return (
    <div className="flex items-center justify-between bg-neutral-700 p-3 text-white">
      <Image src={todo.img} alt="todo" width={50} height={50} />
      <div>
        <h1 className="font-semibold">{todo.title}</h1>
        <p className="text-xs">{todo.desc}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Checkbox
          id="terms2"
          checked={todo.status}
          className="h-8 w-8"
          onClick={async () => await changeTodoStatus({ id: todo._id })}
        />
        <Button
          variant="destructive"
          size="icon"
          className=""
          onClick={async () => await deleteTodo({ id: todo._id })}
        >
          <CiTrash />
        </Button>
      </div>
    </div>
  );
}
