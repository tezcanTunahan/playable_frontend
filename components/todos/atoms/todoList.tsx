import Todo from "./todo";
import { cn } from "@/lib/utils";

type Todo = {
  title: string;
  desc: string;
  status: string;
};

export default function TodoList({
  className,
  todos,
}: {
  className?: string;
  todos: Todo[];
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {todos.map((todo: any, index) => (
        <Todo
          key={index}
          title={todo.title}
          desc={todo.desc}
          status={todo.status}
        />
      ))}
    </div>
  );
}
