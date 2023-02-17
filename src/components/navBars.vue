<script setup lang="ts">
import arrowIcons from "../components/icons/arrowIcon.vue";
</script>
<template>
  <aside>
    <section>
      <div class="flex px-1 py-2 items-center justify-between border-b">
        <p class="text-gray-700 text-sm">URUTKAN BEDASARKAN</p>
        <i><arrowIcons class="w-3" /></i>
      </div>
      <p class="text-xs mt-2 text-gray-500">Harga</p>
    </section>

    <section>
      <div class="flex px-1 py-2 items-center text-sm justify-between border-b">
        <div class="text-gray-700">ORIGIN</div>
        <i><arrowIcons class="w-3" /></i>
      </div>

      <!-- checkbox -->
      <div class="m-2 -mb-2 text-gray-500">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <input type="checkbox" name="some" id="some" />
            <label for="some"> Some</label>
          </div>
          <div class="text-sm">(20)</div>
        </div>
      </div>
      <div class="m-2 -mb-2 text-gray-500">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <input type="checkbox" name="some" id="some" />
            <label for="some"> Some</label>
          </div>
          <div class="text-sm">(20)</div>
        </div>
      </div>
    </section>
  </aside>
</template>
<style scoped>
label {
  @apply mx-2;
}
</style>
