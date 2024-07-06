import React from "react";
import CreateTodo from "./atoms/createTodo";
import TodoList from "./atoms/todoList";
export default function Todos() {
  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <CreateTodo className="flex-1" />
      <TodoList className="flex-1" />
    </div>
  );
}
