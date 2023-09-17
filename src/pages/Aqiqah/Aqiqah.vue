<script setup lang="ts">
import Card from "../../components/Card.vue";
import Main from "../../layouts/Main.vue";

interface Ifilter {
  heading: string;
  items: string[];
}

const filters: Ifilter[] = [
  {
    heading: "kota",
    items: [
      "Kabupaten Bandung",
      "Kabupaten Bandung Barat",
      "Kota Bandung",
      "Kota Cimahi",
    ],
  },
  {
    heading: "harga",
    items: ["Tertinggi", "Terendah"],
  },
];
</script>

<template>
  <Main>
    <section class="w-full max-w-screen-2xl mx-auto px-8">
      <div class="flex items-center justify-between mb-10">
        <div class="w-48">
          <h3 class="font-semibold text-xl">Paket Aqiqah</h3>
        </div>
        <div class="w-full flex gap-x-2 ps-20 ms-8">
          <label :class="`w-full relative block`">
            <span class="sr-only">Search </span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-[14px]">
              <img src="../../assets/icons/search-lg.svg" alt="search-icon" />
            </span>

            <input
              type="text"
              placeholder="Search"
              :class="`w-full appearance-none h-[52px] py-[10px] px-[18px] pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`"
            />
          </label>
        </div>
      </div>
      <div class="flex itemx-center">
        <div class="border-r border-gray-100 pe-24 me-8">
          <div v-for="(filter, index) in filters" :key="index" class="mb-4">
            <h6 class="text-gray-700 text-lg font-semibold mb-4 capitalize">
              {{ filter.heading }}
            </h6>
            <ul>
              <li v-for="(item, index) in filter.items" :key="index">
                <div class="my-3 flex items-center gap-x-3">
                  <input
                    type="checkbox"
                    :name="`type-${index}`"
                    :id="`type-${index}`"
                    class="relative peer shrink-0 appearance-none w-4 h-4 border border-gray-300 rounded-md bg-white mt-1 checked:bg-primary checked:border-0"
                  />
                  <label
                    :for="`type-${index}`"
                    class="font-medium text-gray-700 text-base"
                    >{{ item }}</label
                  >
                  <svg
                    class="absolute w-4 h-4 mt-1 p-[1px] text-white hidden peer-checked:block pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="pb-16 w-full">
          <div
            class="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pb-10"
          >
            <Card :no="1" v-for="index in 20" :key="index" />
          </div>
        </div>
      </div>
    </section>
  </Main>
</template>
