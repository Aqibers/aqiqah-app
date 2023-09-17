<script setup lang="ts">
import { RouterLink } from "vue-router";
const { to, label, color } = defineProps(["to", "label", "color"]);

const colors: { [key: string]: string } = {
  primary:
    "text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900",
  white:
    "text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
};
</script>

<template>
  <RouterLink
    :to="to"
    :class="`w-full h-10 inline-flex items-center justify-center px-3 py-1 text-base font-medium text-center ${
      color ? colors[color] : colors.primary
    }`"
  >
    {{ label }}
  </RouterLink>
</template>
