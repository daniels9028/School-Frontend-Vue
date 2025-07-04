<!-- src/pages/auth/Register.vue -->
<script setup>
import { reactive } from "vue";
import { alertSuccess, alertError } from "../../utils/alert";
import { RouterLink, useRouter } from "vue-router";
import { registerRequest } from "../../api/auth";

const router = useRouter();

const user = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const handleRegister = async () => {
  if (
    !user.name ||
    !user.email ||
    !user.password ||
    !user.password_confirmation
  ) {
    await alertError(
      "Name, email, password and password confirmation tidak boleh kosong."
    );
    return;
  }

  if (user.password.length < 6 || user.password_confirmation.length < 6) {
    await alertError("Minimal password 6 karakter.");
    return;
  }

  try {
    const response = await registerRequest(user);

    await alertSuccess(response.data.message);

    await router.push({
      path: "/login",
    });
  } catch (error) {
    await alertError(error.response.data.message);
  }
};
</script>

<template>
  <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
  <form v-on:submit.prevent="handleRegister" class="space-y-4">
    <div>
      <label class="block text-gray-700">Name</label>
      <input
        v-model="user.name"
        type="text"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
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
    <div>
      <label class="block text-gray-700">Confirmation Password</label>
      <input
        v-model="user.password_confirmation"
        type="password"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    <button
      type="submit"
      class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
    >
      Register
    </button>
    <p class="text-center text-gray-600">
      Already have an account?
      <RouterLink to="/login" class="text-indigo-600 hover:underline"
        >Login
      </RouterLink>
    </p>
  </form>
</template>
