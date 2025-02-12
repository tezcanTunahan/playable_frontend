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
  deleteTodo: ({ id }: { id: string }) => Promise<void>;
  changeTodoStatus: ({ id }: { id: string }) => Promise<void>;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {todos.length > 0 ? (
        todos.map((todo: any, index) => (
          <Todo
            key={index}
            todo={todo}
            deleteTodo={deleteTodo}
            changeTodoStatus={changeTodoStatus}
          />
        ))
      ) : (
        <div>
          <p className="p-10 text-center">No todos found</p>
        </div>
      )}
    </div>
  );
}
