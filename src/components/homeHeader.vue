<script setup lang="ts">
import userIcon from "../components/icons/userIcon.vue";
import cartIcon from "../components/icons/cartIcon.vue";
import heartIcon from "../components/icons/heartIcon.vue";
import searchBar from "../components/searchBar.vue";
</script>
<template>
  <div class="px-2 py-4 flex items-center flex-row-reverse">
    <userIcon />
    <cartIcon class="mx-2" />
    <heartIcon />
    <searchBar />
  </div>
</template>
