<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import Navbar from "../components/Navbar.vue";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<style scoped></style>
