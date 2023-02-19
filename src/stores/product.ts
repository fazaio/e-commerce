import { defineStore } from "pinia";
import { api } from "../plugin/axios";

import type { AxiosError } from "axios";
import type { queryProduct } from "../plugin/type/productType";

// set token
api.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

export const useProductStore = defineStore({
  id: "productStore",
  state: () => {
    return {
      allProduct: [],
      totalAll: "",
    };
  },

  actions: {
    async getAllProduct(params: queryProduct) {
      try {
        let query = {
          price: params.price?.join().toString(),
          limit: params.limit,
          keyword: params.keyword,
          page: params.page,
          order: params.order?.join().toString(),
        };
        const result = await api.get("api/product", { params: query });

        this.totalAll = result.data.data.total;
        this.allProduct = result.data.data.list;
      } catch (err) {
        console.log((err as AxiosError).response?.data);
      }
    },
  },
});
