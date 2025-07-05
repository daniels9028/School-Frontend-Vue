import { reactive } from "vue";
import { useRouter } from "vue-router";
import { alertSuccess, alertError } from "../utils/alert";
import { registerRequest } from "../api/auth";

export function useRegister() {
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
      await router.push("/login");
    } catch (error) {
      await alertError(error?.response?.data?.message);
    }
  };

  return {
    user,
    handleRegister,
  };
}
