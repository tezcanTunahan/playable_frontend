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
          fetchTodos();
        });
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
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

  return { todos, createTodo, deleteTodo, changeTodoStatus, loading };
}
