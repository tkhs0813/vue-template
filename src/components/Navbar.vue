<template>
  <div class="flex flex-col h-screen">
    <header
      class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-2 sm:py-1"
    >
      <div class="flex items-canter justify-between px-2 py-1 sm:p-0">
        <div>
          <img class="h-8" src="/img/logo.svg" alt="logo" />
        </div>
        <div class="sm:hidden">
          <button
            type="button"
            @click="handleClick"
            class="block text-gray-500 hover:text-white focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-else
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        :class="[
          isOpen === true
            ? 'block px-2 pt-2 pb-2 sm:block sm:flex sm:p-0'
            : 'hidden px-2 pt-2 pb-2 sm:block sm:flex sm:p-0',
        ]"
      >
        <a
          href="#"
          class="block sm:inline-block px-2 py-1 text-white font-semibold hover:bg-gray-800"
        >
          List your property
        </a>
        <a
          href="#"
          class="mt-1 block sm:inline-block px-2 py-1 text-white font-semibold hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Trips
        </a>
        <a
          href="#"
          class="mt-1 block sm:inline-block px-2 py-1 text-white font-semibold hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Messages
        </a>
      </div>
    </header>
    <div class="flex flex-1 h-full">
      <nav class="bg-gray-400 w-64">
        <p>サイドバー</p>
      </nav>
      <main class="bg-gray-100 flex w-full">
        <div>メイン</div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen;
    },
  },
});
</script>

<style></style>
