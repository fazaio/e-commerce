<script setup lang="ts">
import type { queryProduct } from "@/src/plugin/type/productType";
import { query } from "../../plugin/type/defaultQueryProduct";
import { useProductStore } from "../../stores/product";

const product = useProductStore();

const changeLimit = (el: Event) => {
  const limit = (el.target as HTMLInputElement).value;
  query.limit = Number(limit);
  product.getAllProduct(query);
};

const sort = (el: Event) => {
  const sortBy = (el.target as HTMLInputElement).value;

  // const sortMethod = query.order?.[1] == "ASC" ? "DESC" : "ASC";

  query.order = Array(sortBy, "ASC");

  console.log(query);

  product.getAllProduct(query);
};
</script>

<template>
  <div class="flex justify-between text-gray-500 mb-2 items-center text-xs">
    <!-- left side -->
    <div>
      Menampilkan
      <label for="page"></label>
      <select @change="changeLimit($event)" name="page" id="page">
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <span>Dari {{ product.totalAll }}</span>
    </div>

    <!-- right side -->
    <div>
      <span>Urutkan</span>
      <select @change="(e) => sort(e)" name="sort" id="">
        <option value="price">Harga</option>
        <option value="date">Terbaru</option>
        <option value="product_name">Nama Produk</option>
      </select>
    </div>
  </div>
</template>
<style scoped>
select {
  @apply p-2 outline-none;
}
span {
  @apply mx-2;
}
</style>
