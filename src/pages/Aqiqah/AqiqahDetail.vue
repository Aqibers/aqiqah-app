<script setup lang="ts">
import { ref } from "vue";
import ButtonCounter from "../../components/ButtonCounter.vue";
import Main from "../../layouts/Main.vue";
import Button from "../../components/Button.vue";
const qty = ref(1);
const increment = (): void => {
  qty.value++;
};
const decrement = (): void => {
  qty.value--;
};
</script>

<template>
  <Main>
    <div
      class="w-full max-w-screen-2xl mx-auto px-8 pt-10 pb-16 grid grid-cols-2 gap-x-6"
    >
      <div class="">
        <img
          src="https://images.unsplash.com/photo-1614183653441-b8cd6d7c516d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="aqiqah-detail"
          class="rounded-lg"
        />
      </div>
      <div class="space-y-3">
        <h3 class="font-semibold text-3xl text-gray-800">Paket Aqiqah 1</h3>
        <h4 class="text-xl text-orange-500">Rp. 1.300.000</h4>
        <div class="space-y-3">
          <h4>Quantity</h4>
          <div class="flex items-center gap-x-3 mb-6">
            <ButtonCounter
              label="-"
              color="primary"
              :active="qty > 1 ? true : false"
              @click="decrement"
            />
            <div class="w-16">
              <input
                :value="qty"
                type="number"
                id="qty"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
              />
            </div>
            <ButtonCounter
              label="+"
              color="white"
              :active="true"
              @click="increment"
            />
          </div>
        </div>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Deskripsi Produk
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Detail Produk
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              commodi, obcaecati repellat ut itaque et, eaque tempora quia, quam
              eius nobis laborum! Libero, minus maiores vitae iure odit dolorum
              quidem praesentium maxime sapiente placeat repudiandae quaerat
              illum eum iusto vel, modi facilis nihil ab fugit nisi eos earum.
              Totam laborum repellendus veniam adipisci eum labore nisi quaerat
              obcaecati deleniti qui similique, perferendis provident
              consequuntur sapiente magnam officia soluta maxime at! Nemo illum
              ducimus quod recusandae dolorum vero fugiat officiis sequi.
            </p>
          </div>
          <div
            class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              iure veritatis aliquid veniam eaque quas perspiciatis, ducimus,
              harum provident corrupti ab culpa velit. Architecto obcaecati
              voluptate fugiat repellendus. Placeat quibusdam unde iste rem
              molestiae perspiciatis excepturi consequuntur repellat beatae. Et,
              impedit perferendis animi iure nobis modi doloremque iste aliquam
              deserunt.
            </p>
          </div>
        </div>
        <div class="mb-10">
          <a
            href="#"
            class="inline-flex items-center gap-x-2 max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <img
              src="../../assets/images/store.png"
              alt="store"
              width="32"
              height="32"
            />
            <h5
              class="text-sm font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Aqiqah Majalaya Berkah
            </h5>
          </a>
        </div>
        <Button to="#" label="Beli" color="primary" />
      </div>
    </div>
  </Main>
</template>
