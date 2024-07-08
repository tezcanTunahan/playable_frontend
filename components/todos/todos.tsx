import React from "react";
import CreateTodo from "./atoms/createTodo";
import TodoList from "./atoms/todoList";
import Paginanation from "./atoms/pagination";
import { useTodo } from "@/hooks/useTodo";
import Search from "./atoms/search";

export default function Todos() {
  const {
    todos,
    createTodo,
    deleteTodo,
    changeTodoStatus,
    loading,
    page,
    nextPage,
    prevPage,
    setSearch,
    totalPages,
  } = useTodo();
  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <CreateTodo
        className="flex-1"
        createTodo={createTodo}
        loading={loading}
      />
      <div className="flex flex-1 flex-col items-end gap-4">
        <Search setSearch={setSearch} />
        <TodoList
          className="w-full"
          todos={todos}
          deleteTodo={deleteTodo}
          changeTodoStatus={changeTodoStatus}
        />
        <Paginanation
          page={page}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </div>
  );
}
