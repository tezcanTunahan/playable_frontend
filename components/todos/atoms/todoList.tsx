import React, { useCallback, useEffect } from "react";
import Todo from "./todo";
import api from "@/lib/api";
import { useAuth } from "@/context/authContext";
export default function TodoList() {
  const [todos, setTodos] = React.useState([]);
  const { username } = useAuth();

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
  }, [fetchTodos, username]);

  return (
    <div>
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