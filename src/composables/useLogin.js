import { reactive, ref } from "vue";
import { loginRequest } from "../api/auth";
import { alertSuccess, alertError } from "../utils/alert";
import { useRouter } from "vue-router";
import { useSessionStorage } from "@vueuse/core";

export function useLogin() {
  const router = useRouter();
  const token = useSessionStorage("token", "");
  const showPassword = ref(false);

  const user = reactive({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };

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
      token.value = response.data.data.access_token;
      await router.push("/dashboard");
    } catch (error) {
      await alertError(error?.response?.data?.message);
    }
  };

  return {
    user,
    showPassword,
    togglePasswordVisibility,
    handleLogin,
  };
}
