<script setup lang="ts">
import { useUserStore } from "../stores/user";

import CustomBtn from "../components/customBtn.vue";
import { reactive } from "vue";

// -------- ---- --------------- - - -
//
// Statement form input base on step
// payload step = [Masuk, step1, step2]
//
// ------- -- -- --- --- ---- --- --- -

const userStore = useUserStore();

const user = reactive({
  email: "",
  password: "",
  rePassowrd: "",
  fullName: "",
  emailRegister: "",
  noTelp: "",
});

const data = reactive({
  tittle: "Masuk",
  button_value: "Masuk",
  step: "Masuk",
});

const setView = (payload: string) => {
  console.log(payload);

  if (payload == "Masuk") {
    data.step = "step1";
    data.tittle = "Daftar Sekarang";
    data.button_value = "Selanjutnya";
  } else if (payload == "string1") {
    data.tittle = "Selanjutnya";
    data.button_value = "Selanjutnya";
  } else {
    data.step = "Masuk";
    data.tittle = "Masuk";
    data.button_value = "Masuk";
  }
};

const actions = () => {
  if (data.step == "Masuk") {
    let obj = {
      email: user.email,
      password: user.password,
    };

    userStore.loginUser(obj);

    console.log("post" + obj);
  } else if (data.step == "step2") {
    let obj = {
      email: user.email,
      noTelp: user.noTelp,
      password: user.password,
      fullname: user.email,
    };

    console.log("daftar" + obj);
  } else {
    data.step = "step2";
  }
};
</script>
<template>
  <div class="h-screen content-center grid gap-4">
    <div class="flex justify-center">
      <div class="card">
        <p class="text-red-500 font-bold">
          {{ data.tittle }}
        </p>

        <!-- Input Login -->
        <div v-if="data.step == 'Masuk'">
          <input
            type="text"
            v-model="user.email"
            placeholder="Email"
            class="mt-5 input-standart"
          />
          <input
            v-model="user.password"
            type="password"
            placeholder="Password"
            class="mt-2 input-standart"
          />
        </div>

        <!-- Input Register step-1 -->
        <div v-if="data.step == 'step1'">
          <input
            type="text"
            placeholder="Name Depan"
            class="mt-5 input-standart"
          />
          <input
            type="text"
            placeholder="Name Belakang"
            class="mt-2 input-standart"
          />
          <input type="Email" placeholder="email" class="mt-2 input-standart" />
        </div>

        <!-- Input Register step-2 -->
        <div v-if="data.step == 'step2'">
          <input
            type="text"
            placeholder="No Telepon"
            class="mt-5 input-standart"
          />
          <input
            type="text"
            placeholder="Password"
            class="mt-2 input-standart"
          />
          <input
            type="text"
            placeholder="Konfirmasi Password"
            class="mt-2 input-standart"
          />
        </div>

        <div class="text-right">
          <p class="text-xs text-red-500">lupa password?</p>
        </div>
        <CustomBtn :payload="data.button_value" @click="actions" class="my-3" />
        <hr />
        <div class="text-center">
          <p class="mt-4 text-gray-400 text-xs">
            {{ data.step != "Masuk" ? "Belum" : "sudah" }} punya Akun?
            <a
              v-if="data.step == 'Masuk'"
              @click="setView(data.step)"
              class="cursor-pointer font-bold text-red-500"
              >Daftar Sekarang</a
            >
            <a
              v-else
              @click="setView('refresh')"
              class="cursor-pointer font-bold text-red-500"
              >Masuk</a
            >
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
