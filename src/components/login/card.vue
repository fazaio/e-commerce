<script setup lang="ts">
import CustomBtn from "../customBtn.vue";

const props = defineProps({
  view_type: String,
  step: Number,
});

const tittle = props.view_type ? props.view_type : "Masuk";
const button_value = props.view_type != "Masuk" ? "Selanjutnya" : "Masuk";
</script>
<template>
  <div class="h-screen content-center grid gap-4">
    <div class="flex justify-center">
      <div class="card">
        <p class="text-red-500">{{ tittle }}</p>
        <input type="text" placeholder="email" class="mt-5 input-standart" />
        <input type="text" placeholder="password" class="mt-2 input-standart" />
        <div class="text-right">
          <p class="text-xs text-red-500">lupa password?</p>
        </div>
        <CustomBtn :payload="button_value" class="my-3" />
        <hr />
        <div class="text-center">
          <p class="mt-4 text-gray-400 text-xs">
            Belum punya Akun?
            <a class="cursor-pointer font-bold text-red-500">Daftar Sekarang</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  @apply w-96 px-4 py-5 border shadow grid justify-items-stretch;
}
</style>
