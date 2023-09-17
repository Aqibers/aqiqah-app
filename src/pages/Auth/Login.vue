<script setup lang="ts">
import Auth from "../../layouts/Auth.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <Auth>
    <div class="w-full flex">
      <div class="w-1/2 h-screen">
        <img
          src="https://images.unsplash.com/photo-1614183653441-b8cd6d7c516d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="image-login"
          class="w-full h-full object-cover filter brightness-75"
        />
      </div>
      <div class="w-1/2 bg-white h-screen px-24 py-20 space-y-8">
        <RouterLink to="/"
          ><img src="../../assets/images/logo.png" alt="logo" class="w-36"
        /></RouterLink>
        <div class="ps-10">
          <p class="text-blue-500">Welcome back</p>
          <h3 class="font-semibold text-3xl text-gray-800">
            Login to your account
          </h3>
        </div>

        <form class="ps-10">
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your email</label
            >
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your.email@email.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your password</label
            >
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login now
          </button>
          <div class="flex items-center justify-between mt-3 mb-6">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Remember me</label
              >
            </div>
            <a href="/" class="text-sm font-medium text-orange-400"
              >Forgot password?</a
            >
          </div>
          <p class="text-sm font-medium text-gray-900 dark:text-gray-300">
            Don't have an account?
            <RouterLink to="/register" class="text-orange-400"
              >Create Account Now</RouterLink
            >
          </p>
        </form>
      </div>
    </div>
  </Auth>
</template>

<style scoped></style>
