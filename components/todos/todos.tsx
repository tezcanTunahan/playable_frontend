import React from "react";
import CreateTodo from "./atoms/createTodo";
import TodoList from "./atoms/todoList";
export default function Todos() {
  return (
    <div>
      <CreateTodo />
      <TodoList />
    </div>
  );
}
