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

  function createTodo() {}

  return { todos };
}
