<!-- src/pages/auth/Login.vue -->
<script setup>
import { RouterLink } from "vue-router";
import CommonGridShape from "../../components/common/CommonGridShape.vue";
import BaseInput from "../../components/BaseInput.vue";
import { useLogin } from "../../composables/useLogin";

const { user, handleLogin } = useLogin();
</script>

<template>
  <div class="flex flex-col flex-1 w-full lg:w-1/2">
    <div class="w-full max-w-md pt-10 mx-auto">
      <router-link
        to="/"
        class="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
      >
        <svg
          class="stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M12.7083 5L7.5 10.2083L12.7083 15.4167"
            stroke=""
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Back to dashboard
      </router-link>
    </div>
    <div class="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
      <div>
        <div class="mb-5 sm:mb-8">
          <h1
            class="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md"
          >
            Sign In
          </h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Enter your email and password to sign in!
          </p>
        </div>
        <div>
          <form @submit.prevent="handleLogin">
            <div class="space-y-5">
              <!-- Email -->
              <BaseInput
                v-model="user.email"
                id="email"
                name="email"
                placeholder="Enter your email"
                label="Email"
                :required="true"
                type="email"
              />
              <!-- Password -->
              <BaseInput
                v-model="user.password"
                id="password"
                name="password"
                placeholder="Enter your password"
                label="Password"
                :required="true"
                type="password"
                :showPasswordToggle="true"
              />
              <!-- Button -->
              <div>
                <button
                  type="submit"
                  class="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
          <div class="mt-5">
            <p
              class="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start"
            >
              Don't have an account?
              <RouterLink
                to="/register"
                class="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >Sign Up</RouterLink
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="relative items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid"
  >
    <div class="flex items-center justify-center z-1">
      <CommonGridShape />
      <div class="flex flex-col items-center max-w-xs">
        <router-link to="/" class="block mb-4">
          <img
            width="{231}"
            height="{48}"
            src="/images/logo/auth-logo.svg"
            alt="Logo"
          />
        </router-link>
        <p class="text-center text-gray-400 dark:text-white/60">
          Free and Open-Source Tailwind CSS Admin Dashboard Template
        </p>
      </div>
    </div>
  </div>
</template>
