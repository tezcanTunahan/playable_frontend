import api from "@/lib/api";

export const loginRequest = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  const token = response.data.accessToken;

  api.defaults.headers.common["Authorization"] = "Bearer " + token;

  const userResponse = await api.get("/users/me");

  return {
    token,
    username: userResponse.data.username,
  };
};

export const getUserDetails = async () => {
  const response = await api.get("/users/me");
  return response.data;
};
