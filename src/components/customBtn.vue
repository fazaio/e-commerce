<template>
  <div>
    <button
      v-bind:type="props.payload == 'Masuk' ? 'submit' : 'button'"
      class="bg-red-500 text-gray-200 rounded py-1 px-6 block w-full"
    >
      {{ props.payload }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  payload: String,
});
</script>
