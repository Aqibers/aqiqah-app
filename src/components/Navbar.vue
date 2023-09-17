<script setup lang="ts">
import { RouterLink } from "vue-router";
import Button from "./Button.vue";

const links = [
  { name: "home", to: "/" },
  { name: "Aqiqah ", to: "/aqiqah" },
  { name: "Penyedia", to: "/penyedia-aqiqah" },
];
</script>
<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <RouterLink to="/" class="flex items-center">
        <img src="../assets/images/logo.png" class="w-48" alt="Aqiqah Logo" />
      </RouterLink>
      <div class="w-1/2 md:w-48 flex gap-x-3 md:order-2">
        <Button label="Sign In" to="/login" color="primary" />
        <Button label="Sign Up" to="/register" color="white" />
        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-cta"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li v-for="(link, index) in links" :key="index">
            <RouterLink
              :to="link.to"
              class="block py-2 pl-3 pr-4 text-gray-800 bg-white rounded md:bg-transparent md:text-gray-800 md:p-0 md:dark:text-blue-700 capitalize"
              aria-current="page"
              >{{ link.name }}</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.router-link-active {
  color: rgb(26 86 219) !important;
}
</style>
