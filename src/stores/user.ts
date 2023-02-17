import type { userSchema } from "../plugin/type/userType";
import { defineStore } from "pinia";
import type { AxiosError } from "axios";
import authStore from "./auth";
import { api } from "../plugin/axios";

export const useUserStore = defineStore({
  id: "userStore",
  state: () => ({
    user: {
      email: "",
      password: "",
    },
  }),

  actions: {
    async loginUser(payload: userSchema) {
      const auth = authStore();
      try {
        const result = await (await api.post("api/login", payload)).data;
        await auth.setToken(result.data);
      } catch (err) {
        console.log((err as AxiosError).response?.data);
      }
    },
  },
});
