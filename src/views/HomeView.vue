<script setup lang="ts">
import listProduct from "../components/product/listProduct.vue";
import homeHeader from "../components/homeHeader.vue";
import navBars from "../components/navBars.vue";
import currentShow from "../components/paginate/currentShow.vue";
import { onMounted } from "vue";

import { useProductStore } from "../stores/product";
import paginatePrdocut from "../components/product/paginationProduct.vue";

import type { queryProduct } from "../plugin/type/productType";

const product = useProductStore();

onMounted(() => {
  let query: queryProduct = {
    limit: 10,
    page: 1,
    price: [10000, 250000],
    keyword: "",
    order: ["product_name", "ASC"],
  };

  product.getAllProduct(query);
});
</script>

<template>
  <main class="container mx-auto">
    <header>
      <homeHeader />
    </header>
    <nav class="my-4">
      <button>BELANJA</button>
      <div class="dir">Home >> Produk >> Roasted Bean</div>
    </nav>
    <section class="grid gap-x-5 grid-cols-3 mx-2">
      <navBars class="px-2" />
      <section class="col-span-2">
        <currentShow />
        <div class="grid gap-4 grid-cols-3">
          <listProduct
            v-for="row in product.allProduct"
            :tittle="row['name']"
            :type="row['short_description']"
            :price="row['price']"
            :img_slug="row['images'][0]['image_url']"
          />
        </div>
        <paginatePrdocut />
      </section>
    </section>
  </main>
</template>
<style scoped>
button {
  @apply bg-red-500 px-3 py-1 rounded-sm text-white;
}
p {
  @apply my-2 text-gray-500 text-xs;
}
.dir {
  @apply py-2 my-2 text-gray-500 text-xs;
}
</style>
