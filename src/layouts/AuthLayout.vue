<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-500"
  >
    <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      <RouterView />
    </div>
  </div>
</template>
