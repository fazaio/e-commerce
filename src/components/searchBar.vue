<script setup lang="ts">
import type { queryProduct } from "../plugin/type/productType";
import searchIcon from "./icons/searchIcon.vue";
import { query } from "../plugin/type/defaultQueryProduct";
import { useProductStore } from "../stores/product";
import { watchEffect, ref } from "vue";

let valElement = ref(null);
const product = useProductStore();

const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

const filter = (payload: string) => {
  query.keyword = payload;
  setTimeout(() => {
    product.getAllProduct(query);
  }, 300);
};
const req = debounce(filter, 30);

watchEffect(() => {
  if (valElement.value) {
    req(valElement.value);
  }
});
</script>
<template>
  <div class="flex items-center mx-2">
    <div class="shrink">
      <input
        v-model="valElement"
        placeholder="Cari produk"
        type="text"
        class="outline-none w-64 h-8 border rounded-tl rounded-bl px-2 text-xs"
      />
    </div>
    <div class="flex-none bg-red-500 rounded-tr rounded-br h-8 w-8 flex">
      <div class="m-auto"><searchIcon class="w-4" /></div>
    </div>
  </div>
</template>
