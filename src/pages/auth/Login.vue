<!-- src/pages/auth/Login.vue -->
<script setup>
import { reactive } from "vue";
import { loginRequest } from "../../api/auth";
import { alertSuccess, alertError } from "../../utils/alert";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const user = reactive({
  email: "",
  password: "",
});

const handleLogin = async () => {
  if (!user.email || !user.password) {
    await alertError("Email dan password tidak boleh kosong.");
    return;
  }

  if (user.password.length < 6) {
    await alertError("Minimal password 6 karakter.");
    return;
  }

  try {
    const response = await loginRequest(user);

    await alertSuccess(response.data.message);

    sessionStorage.setItem("token", response.data.data.access_token);

    await router.push({
      path: "/dashboard",
    });
  } catch (error) {
    await alertError(error.response.data.message);
  }
};
</script>

<template>
  <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
  <form v-on:submit.prevent="handleLogin" class="space-y-4">
    <div>
      <label class="block text-gray-700">Email</label>
      <input
        v-model="user.email"
        type="email"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    <div>
      <label class="block text-gray-700">Password</label>
      <input
        v-model="user.password"
        type="password"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    <button
      type="submit"
      class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
    >
      Login
    </button>
    <p class="text-center text-gray-600">
      Don't have an account?
      <RouterLink to="/register" class="text-indigo-600 hover:underline"
        >Register
      </RouterLink>
    </p>
  </form>
</template>
