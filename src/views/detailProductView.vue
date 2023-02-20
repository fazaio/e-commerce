<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import customBtnVue from "../components/customBtn.vue";
import HomeHeader from "../components/homeHeader.vue";
import heartIconVue from "../components/icons/heartIcon.vue";
import startRatingIconVue from "../components/icons/startRatingIcon.vue";
import cardProduct from "../components/product/cardProdurct.vue";
import miniSliderProduct from "../components/product/minisliderProduct.vue";
import { ref, reactive } from "vue";

const route = useRoute();
let details = ref();

onMounted(() => {
  details.value = route.params.id;
});
</script>
<template>
  <main class="container mx-auto">
    <header>
      <HomeHeader />
    </header>
    <nav class="my-4">
      <button>BELANJA {{ details }}</button>
      <div class="dir">Home >> Produk >> Roasted Bean</div>
    </nav>
    <section class="my-10 grid gap-4 grid-cols-2 mx-2">
      <!-- left-side -->
      <div>
        <miniSliderProduct />
      </div>

      <!-- right-side -->
      <div class="p-5">
        <p class="font-bold text-gray-500">Harga atau judul barangnya</p>
        <p class="font-md text-gray-500">mini desc</p>
        <startRatingIconVue />
        <p class="text-red-500 font-bold">Rp 500,000</p>
        <div class="grid grid-cols-3 my-10">
          <div class="p-2 flex text-center items-center text-gray-500">
            <div class="flex-none py-2 px-4 border font-bold">-</div>
            <div class="grow p-2 border">as</div>
            <div class="flex-none py-2 px-4 border font-bold">+</div>
          </div>
          <div class="p-2">
            <button class="py-3 px-2 text-sm bg-red-500 w-full text-white">
              TAMBAH KE KERANJANG
            </button>
          </div>
          <div class="p-2 my-2"><heartIconVue /></div>
        </div>

        <p class="text-gray-500 mt-10 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vitae
          nesciunt beatae nobis sequi voluptatum voluptates adipisci modi ad vel
          repudiandae aliquam velit sit tenetur repellat incidunt doloremque
          necessitatibus dolores!
        </p>
      </div>
    </section>

    <div class="my-10 flex items-center justify-center">
      <div class="font-bold border-b-2 p-2 px-10 mx-10">DESKRIPSI</div>
      <div class="font-bold border-b-2 p-2 px-10 mx-10">INFORMASI</div>
    </div>

    <p class="my-10 w-2/3 mx-auto text-gray-400">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit
      aspernatur, commodi exercitationem dicta laudantium labore rem saepe
      facilis. Aliquam tempora facere molestias itaque delectus iste architecto
      quo, asperiores rerum. beatae
      <br />
      asd <br />
      asd <br />
      asd <br />
      asd <br />
    </p>

    <div class="my-10 text-center font-bold">REKOMENDASI UNTUK ANDA</div>

    <div class="grid gap-10 grid-cols-3 mt-10 mb-36 justify-center">
      <cardProduct />
      <cardProduct />
      <cardProduct />
    </div>
  </main>
</template>
