import { defineStore } from "pinia";
import { api } from "../plugin/axios";

export default defineStore("auth", {
  state: () => {
    return {
      isLogin: false,
    };
  },

  actions: {
    async setToken(payload: any) {
      localStorage.setItem("user", JSON.stringify(payload));
      localStorage.setItem("token", payload.token);
    },
    async removeToken(token: string) {
      localStorage.removeItem(token);
    },
  },
});
