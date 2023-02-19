<script setup lang="ts">
interface pagination {
  total?: number;
  limit?: number;
}
</script>
<template>
  <div
    class="my-5 py-10 px-1 text-center text-gray-400 grid justify-items-center"
  >
    <div class="flex flex-row">
      <div class="box font-extrabold">{{ "<" }}</div>
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box font-extrabold">></div>
    </div>
  </div>
</template>

<style scoped>
.box {
  @apply p-2 text-xs border;
}
</style>
