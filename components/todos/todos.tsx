import React from "react";
import CreateTodo from "./atoms/createTodo";
import TodoList from "./atoms/todoList";
import { useTodo } from "@/hooks/useTodo";

export default function Todos() {
  const { todos, createTodo, deleteTodo, changeTodoStatus } = useTodo();
  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <CreateTodo className="flex-1" createTodo={createTodo} />
      <TodoList
        className="flex-1"
        todos={todos}
        deleteTodo={deleteTodo}
        changeTodoStatus={changeTodoStatus}
      />
    </div>
  );
}
