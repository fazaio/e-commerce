<script setup lang="ts">
import startRatingIcon from "../icons/startRatingIcon.vue";

interface Props {
  total?: number;
}

const props = withDefaults(defineProps<Props>(), {
  total: 1,
});
</script>

<template>
  <div class="block text-center">
    <startRatingIcon v-for="(item, index) in total" />
  </div>
</template>
