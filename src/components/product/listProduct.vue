<script setup lang="ts">
import ratings from "./ratings.vue";
// import type { productList } from "../../plugin/type/productType";
interface productList {
  tittle: string;
  type: string;
  price: number;
  img_slug: string;
}
const props = defineProps<productList>();
</script>

<template>
  <div class="product-headers">
    <img :src="props.img_slug" :alt="props.type" />
    <div class="product-detail">
      <div class="text-sm font-bold">
        {{ props.tittle.replace(/[^a-zA-Z ]/g, "") }}
      </div>
      <div class="my-2 text-xs">
        {{ props.type.replace(/[^a-zA-Z ]/g, "").substring(0, 20) }} . . .
      </div>
      <div><ratings :total="4" /></div>
      <div class="text-red-400 font-bold">Rp {{ props.price }}</div>
    </div>
  </div>
</template>
<style scoped>
.product-headers {
  @apply p-2 border text-center shadow-md rounded text-gray-500;
}
.product-detail {
  @apply py-2 mt-2;
}
</style>
