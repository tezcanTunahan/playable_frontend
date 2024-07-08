import api from "../lib/api";

export const fetchTodosRequest = async (
  page: number,
  limit: number,
  search: string,
) => {
  const res = await api.get(
    `/todo?page=${page}&limit=${limit}&search=${search}`,
  );
  return res.data;
};

export const createTodoRequest = async (
  title: string,
  desc: string,
  img: string,
) => {
  const res = await api.post("/todo", { title, desc, img });
  return res.data;
};

export const deleteTodoRequest = async (id: string) => {
  const res = await api.delete(`/todo/${id}`);
  return res.data;
};

export const changeTodoStatusRequest = async (id: string) => {
  const res = await api.patch(`/todo/${id}`);
  return res.data;
};
