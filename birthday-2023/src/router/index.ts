import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/qrcode",
      name: "qrcode",
      component: () => import("../views/QrcodeView.vue"),
    },
  ],
});

export default router;
