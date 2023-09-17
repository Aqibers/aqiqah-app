<script setup lang="ts">
import Main from "../layouts/Main.vue";
import Hero from "../components/Home/Hero.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Main>
    <Hero />
    <section class="w-full max-w-screen-xl mx-auto px-8 py-16 bg-gray-100">
      <div class="flex items-center justify-between mb-6">
        <h3 class="font-semibold text-xl tracking-wide text-gray-900">
          Paket Aqiqah
        </h3>
        <router-link to="/login" class="text-blue-700">Lihat semua</router-link>
      </div>
      <div class="grid grid-cols-4 gap-12">
        <div
          v-for="index in 8"
          :key="index"
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="rounded-t-lg h-56 w-full object-cover"
              src="https://images.unsplash.com/photo-1588942173353-0c53a1bf9081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Paket Aqiqah 1
              </h5>
            </a>
            <p class="mb-3 font-medium text-gray-700 dark:text-gray-400">
              RP.1.200.000
            </p>
            <p>1,000 Pembeli</p>
            <p>Majalaya</p>
          </div>
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
        <div
          v-for="index in 8"
          :key="index"
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="rounded-t-lg h-56 w-full object-cover"
              src="https://images.unsplash.com/photo-1588942173353-0c53a1bf9081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5
                class="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Aqiqah Majalaya Berkah
              </h5>
            </a>

            <p>1,000 Pembeli</p>
            <p>Majalaya</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </Main>
</template>

<style scoped></style>
