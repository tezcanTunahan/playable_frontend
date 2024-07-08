import { useCallback, useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";
import { toast } from "@/components/ui/use-toast";
import {
  fetchTodosRequest,
  createTodoRequest,
  deleteTodoRequest,
  changeTodoStatusRequest,
} from "@/services/todoService";

type Todo = {
  title: string;
  desc: string;
  status: string;
  img: string;
};

export function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const fetchTodos = useCallback(
    async (page: number, limit: number, search: string) => {
      setTodos([]);
      try {
        const data = await fetchTodosRequest(page, limit, search);
        setTodos(data.todos);
        setTotalPages(data.totalPages);
        console.log(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    },
    [],
  );

  useEffect(() => {
    fetchTodos(page, limit, search);
  }, [fetchTodos, page, limit, search]);

  function nextPage() {
    if (page >= totalPages) return;
    setPage((prev) => prev + 1);
  }
  function prevPage() {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  }

  async function createTodo(title: string, desc: string, file: File | null) {
    setLoading(true);
    if (!file) {
      toast({
        title: "Error",
        description: "Please upload an image",
        variant: "destructive",
      });
      setLoading(false);
      return;
    } else if (!title || !desc) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    const storageRef = ref(storage, `images/${file.name}`);
    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      console.log("File available at", url);
      await createTodoRequest(title, desc, url);
      fetchTodos(page, limit, search);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteTodo({ id }: { id: string }) {
    try {
      await deleteTodoRequest(id);
      fetchTodos(page, limit, search);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  async function changeTodoStatus({ id }: { id: string }) {
    try {
      await changeTodoStatusRequest(id);
      fetchTodos(page, limit, search);
    } catch (error) {
      console.error("Error changing todo status:", error);
    }
  }

  return {
    todos,
    createTodo,
    deleteTodo,
    changeTodoStatus,
    loading,
    page,
    nextPage,
    setSearch,
    prevPage,
    totalPages,
  };
}
