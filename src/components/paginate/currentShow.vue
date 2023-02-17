<template>
  <div class="flex justify-between text-gray-500 mb-2 items-center text-xs">
    <!-- left side -->
    <div>
      Menampilkan
      <label for="page"></label>
      <select name="page" id="page">
        <option value="10">10</option>
        <option value="15">10</option>
        <option value="20">10</option>
        <option value="25">10</option>
      </select>
      <span>Dari 123</span>
    </div>

    <!-- right side -->
    <div>
      <span>Urutkan</span>
      <span>Nama Produk</span>
    </div>
  </div>
</template>
<style scoped>
select {
  @apply p-2 outline-none;
}
span {
  @apply mx-2;
}
</style>
