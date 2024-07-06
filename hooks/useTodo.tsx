import api from "@/lib/api";
import { useCallback, useEffect, useState } from "react";

type Todo = {
  title: string;
  desc: string;
  status: string;
};

export function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchTodos = useCallback(async () => {
    setTodos([]);
    try {
      const res = await api.get("/todo");
      setTodos(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  function createTodo(title: string, desc: string, img: File | null) {
    api.post("/todo", { title, desc, img: "selam" }).then(() => {
      fetchTodos();
    });
  }

  function deleteTodo({ id }: { id: string }) {
    api.delete(`/todo/${id}`).then(() => {
      fetchTodos();
    });
  }

  function changeTodoStatus({ id }: { id: string }) {
    api.patch(`/todo/${id}`).then(() => {
      fetchTodos();
    });
  }

  return { todos, createTodo, deleteTodo, changeTodoStatus };
}
