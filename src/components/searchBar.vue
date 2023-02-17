<script setup lang="ts">
import searchIcon from "./icons/searchIcon.vue";
</script>
<template>
  <div class="flex items-center mx-2">
    <div class="shrink">
      <input
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
