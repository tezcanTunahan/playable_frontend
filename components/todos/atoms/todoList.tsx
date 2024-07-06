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
  deleteTodo,
  changeTodoStatus,
}: {
  className?: string;
  todos: Todo[];
  deleteTodo: ({ id }: { id: string }) => void;
  changeTodoStatus: ({ id }: { id: string }) => void;
}) {
  console.log(todos);

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {todos.map((todo: any, index) => (
        <Todo
          key={index}
          title={todo.title}
          desc={todo.desc}
          status={todo.status}
          deleteTodo={deleteTodo}
          id={todo._id}
          changeTodoStatus={changeTodoStatus}
        />
      ))}
    </div>
  );
}
