import { createRouter, createWebHistory } from "vue-router";

import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import Dashboard from "../pages/Dashboard.vue";

const routes = [
  {
    component: AuthLayout,
    children: [
      {
        path: "/login",
        component: Login,
      },
      {
        path: "/register",
        component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
