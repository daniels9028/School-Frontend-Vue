<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="min-h-screen">
    <main>
      <div class="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
        <div
          class="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900"
        >
          <RouterView />
        </div>
      </div>
    </main>
  </div>
</template>
