<script setup lang="ts">
import Main from "../layouts/Main.vue";
import Hero from "../components/Home/Hero.vue";
import Card from "../components/Card.vue";
</script>

<template>
  <Main>
    <Hero />
    <section class="w-full mx-auto px-8 py-16 bg-gray-100">
      <div class="w-full max-w-screen-xl mx-auto">
        <div class="flex items-center justify-between mb-6">
          <h3 class="font-semibold text-xl tracking-wide text-gray-900">
            Paket Aqiqah
          </h3>
          <router-link to="/login" class="text-blue-700"
            >Lihat semua</router-link
          >
        </div>
        <div class="grid grid-cols-4 gap-12">
          <Card :no="1" v-for="index in 8" :key="index" />
        </div>
      </div>
    </section>
    <section class="w-full max-w-screen-xl mx-auto px-8 py-16">
      <div class="flex items-center justify-between mb-6">
        <h3 class="font-semibold text-xl tracking-wide text-gray-900">
          Penyedia Aqiqah
        </h3>
        <router-link to="/login" class="text-blue-700">Lihat semua</router-link>
      </div>
      <div class="grid grid-cols-4 gap-12">
        <Card :no="2" v-for="index in 8" :key="index" />
      </div>
    </section>
  </Main>
</template>

<style scoped></style>
