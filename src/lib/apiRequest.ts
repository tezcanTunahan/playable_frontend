import axios, {
  AxiosError,
  type CreateAxiosDefaults,
  HttpStatusCode,
} from "axios";

import { apiBaseUrl } from "@/config/playablefactory_frontend";

import { useAuthStore } from "@/stores/useAuthStore";

const baseConfig: CreateAxiosDefaults = {
  baseURL: apiBaseUrl,
  withCredentials: true,
};
export const publicApiRequest = axios.create(baseConfig);

export const privateApiRequest = axios.create(baseConfig);

privateApiRequest.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

privateApiRequest.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === HttpStatusCode.Unauthorized) {
      useAuthStore.getState().handleLogOut();
      return;
    }
    return Promise.reject(error);
  }
);
