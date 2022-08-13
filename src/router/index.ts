import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/new-apartment",
      name: "newApartment",
      component: () => import("@/components/newapartment/NewAptView.vue"),
    },
  ],
});

export default router;
