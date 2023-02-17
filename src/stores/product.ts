import type { userSchema } from "../plugin/type/userType";
import { defineStore } from "pinia";
import type { AxiosError } from "axios";
import authStore from "./auth";
import { reactive } from "vue";
import { api } from "../plugin/axios";

// set token
api.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

export const useProductStore = defineStore({
  id: "productStore",
  state: () => {
    return {
      allProduct: [],
    };
  },

  actions: {
    async getAllProduct() {
      try {
        const result = await api.get(
          "api/product?keyword=&price=10000,250000&page=1&limit=10&order=product_name,ASC"
        );

        this.allProduct = result.data.data.list;

        console.log(result);
      } catch (err) {
        console.log((err as AxiosError).response?.data);
      }
    },
  },
});
