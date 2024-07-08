import api from "@/lib/api";
import { useCallback, useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";
import { toast } from "@/components/ui/use-toast";

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
        const res = await api.get(
          `/todo?page=${page}&limit=${limit}&search=${search}`,
        );
        setTodos(res.data.todos);
        setTotalPages(res.data.totalPages);
        console.log(res.data);
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
      api
        .post("/todo", {
          title,
          desc,
          img: url,
        })
        .then(() => {
          fetchTodos(page, limit, search);
        });
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  }

  function deleteTodo({ id }: { id: string }) {
    api.delete(`/todo/${id}`).then(() => {
      fetchTodos(page, limit, search);
    });
  }

  function changeTodoStatus({ id }: { id: string }) {
    api.patch(`/todo/${id}`).then(() => {
      fetchTodos(page, limit, search);
    });
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
