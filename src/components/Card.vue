<script setup lang="ts">
import { RouterLink } from "vue-router";
defineProps({
  no: Number,
});
</script>

<template>
  <RouterLink
    to="/aqiqah/1"
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <RouterLink to="/aqiqah/1">
      <img
        class="rounded-t-lg h-56 w-full object-cover"
        src="https://images.unsplash.com/photo-1588942173353-0c53a1bf9081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80"
        alt=""
      />
    </RouterLink>
    <div class="p-5">
      <RouterLink to="/aqiqah/1">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ no === 1 ? "Paket Aqiqah 1" : "Aqiqah Majalaya Berkah" }}
        </h5>
      </RouterLink>
      <p
        v-if="no === 1"
        class="mb-3 font-medium text-gray-700 dark:text-gray-400"
      >
        RP.1.200.000
      </p>
      <p>1,000 Pembeli</p>
      <p>Majalaya</p>
    </div>
  </RouterLink>
</template>
