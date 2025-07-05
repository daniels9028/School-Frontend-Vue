import { createRouter, createWebHistory } from "vue-router";

import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";
import AuthLayout from "../components/layouts/AuthLayout.vue";
import Dashboard from "../pages/Dashboard.vue";
import DashboardLayout from "../components/layouts/DashboardLayout.vue";

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
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        component: Dashboard,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
